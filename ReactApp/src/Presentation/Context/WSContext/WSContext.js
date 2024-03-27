import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { useStompClient, useSubscription } from 'react-stomp-hooks';
import { useUser } from '../UserContext/UserContext';

const WebSocketContext = createContext();

export const useWebSocket = () => {
    return useContext(WebSocketContext);
};

export const WebSocketProvider = ({ children }) => {
    const stompClient = useStompClient();

    const { username } = useUser();

    const [notifications, setNotifications] = useState([]);
    const [type, setType] = useState([]);

    const sendToTopic = useCallback((data) => {
        if (stompClient)
            stompClient.publish({ destination: '/app/getNotifications', body: data });
        else
            console.log("stompClient is null");
    }, [stompClient]);

    useEffect(() => {
        if (username != null) {
            sendToTopic(username);
        }
    }, [username, sendToTopic])

    useSubscription('/topic/' + username,
        (message) => {
            var temp = JSON.parse(message.body);
            temp = temp.map((obj) => ({ ...obj, date: new Date(obj.date) }));
            temp.sort((notif1, notif2) => (notif2.date - notif1.date));
            setNotifications(temp);
        }
    );

    useEffect(() => {
        let unseenNotifs = notifications.filter(({ seen }) => (seen === 'unseen'));
        let types = [];
        if (unseenNotifs.filter(({ type }) => (type === "Friend Request")).length > 0)
            types = [...types, "Friend Request"];
        if (unseenNotifs.filter(({ type }) => (type === "Comment")).length > 0)
            types = [...types, "Comment"];
        if (unseenNotifs.filter(({ type }) => (type === "Post")).length > 0)
            types = [...types, "Post"];
        setType(types);
    }, [notifications])

    const store = {
        sendToTopic,
        notifications,
        type
    }

    return (
        <WebSocketContext.Provider value={store}>
            {children}
        </WebSocketContext.Provider>
    );
};
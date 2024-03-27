import { useEffect, useRef, useState } from "react";
import { GetMessages, Message } from "../../../../../../../Domain/UseCase/Chat/Chat";
import { useUser } from "../../../../../../Context/UserContext/UserContext";
import { useSubscription } from "react-stomp-hooks";

const MessageContainerViewHandler = (props) => {

    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState([]);
    const inputRef = useRef();

    const { username } = useUser();

    function sendMessage() {
        Message()
            .execute(message, username, props.lobbyId)
            .then(({ data }) => {
                if (data) {
                    const temp = [data, ...messages];
                    setMessages(temp);
                    inputRef.current.value = "";
                }
            })
    }

    useSubscription("/topic/chat/" + props.lobbyId,
        (message) => {
            if (message.sender !== username) {
                const temp = [JSON.parse(message.body), ...messages];
                setMessages(temp);
            }
        })

    useEffect(() => {
        GetMessages()
            .execute(props.lobbyId)
            .then(({ data }) => {
                if (data) {
                    console.log(data);
                    data.reverse();
                    setMessages(data);
                }
            })
    }, [props.lobbyId])

    return {
        messages,
        setMessage,
        sendMessage,
        username,
        inputRef
    }
}

export default MessageContainerViewHandler;
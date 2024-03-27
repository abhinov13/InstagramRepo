import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSubscription } from "react-stomp-hooks";

const LobbyViewHandler = (props) => {

    const [src, setSrc] = useState("/user.svg");
    const [username, setUsername] = useState("");
    const [senderName, setName] = useState("");
    const [lastMessage,setLastMessage] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        var otherUser = props.data.users.filter((user) => (user.username !== props.username));
        otherUser = otherUser[0];
        if (otherUser.profilePictureUrl != null)
            setSrc(otherUser.profilePictureUrl)
        setUsername(otherUser.username);
        setLastMessage(props.data.lastMessage);
    }, [props.username, props.data]);

    useEffect(() => {
        setName(lastMessage.sender);
    }, [lastMessage])

    useSubscription("/topic/chat/" + props.data.id,
        (message) => {
            const data = JSON.parse(message.body);
            console.log("received data through chat subscription");
            console.log(data);
            setLastMessage(data);
        });

    function goToUser() {
        navigate("/home/user/" + username);
    }

    function openChat() {
        props.setLobby(props.data.id);
    }

    return {
        src,
        username,
        senderName,
        openChat,
        goToUser,
        lastMessage
    }
};

export default LobbyViewHandler;
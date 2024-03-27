import LobbyViewHandler from "./LobbyViewHandler";

const Lobby = (props) => {
    const {
        src,
        username,
        senderName,
        goToUser,
        openChat,
        lastMessage
    } = LobbyViewHandler(props);

    return <div style={{ cursor: "pointer", overflow: "hidden" }} >
        <div style={{ height: "80%", aspectRatio: "1/1" }}>
            <img src={src} alt="user avatar" onClick={goToUser} />
        </div>
        <div style={{ flex: "1", overflow: "hidden" }} onClick={openChat}>
            <div>{username}</div>
            <div style={{ width: "calc(95%)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {lastMessage ? senderName + ": " + lastMessage.message
                    : null}
            </div>
        </div>
    </div>
}

export default Lobby;
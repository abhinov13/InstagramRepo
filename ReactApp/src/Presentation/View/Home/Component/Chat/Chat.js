import ChatViewModel from "./ChatViewModel";
import Lobby from "./Components/Lobby/Lobby";
import MessageContainer from "./Components/MessageContainer/MessageContainer";
import SearchMessageUser from "./Components/SearchMessageUser/SearchMessageUser";

const Chat = () => {

    const { username,
        lobbies,
        toggleSearchBar,
        setToggleSearchBar,
        lobby,
        setLobby
    } = ChatViewModel();

    return (
        <>
            {toggleSearchBar ? <SearchMessageUser setToggleSearchBar={setToggleSearchBar} setLobby={setLobby} /> : <></>}
            <div className="chat_wrapper">
                <div className="lobby_wrapper">
                    <div className="lobby_header">
                        <div style={{ cursor: "pointer", width: "90%", minWidth: "0", justifyContent: "flex-start", overflowX: "hidden" }}>{username} </div>
                        <div style={{ flex: "1" }}>
                            <img
                                src="/createMessage.svg"
                                alt="create message"
                                onClick={() => { setToggleSearchBar(true) }}
                            />
                        </div>
                    </div>
                    <div style={{ fontWeight: "bold" }}>Messages</div>
                    <div className="lobby">
                        {
                            lobbies?.map((val) => (
                                <Lobby data={val} username={username} setLobby={setLobby} />
                            ))
                        }
                    </div>
                </div>
                <div className="message_holder">
                    {lobby ? <MessageContainer lobbyId={lobby} /> :
                        <div className="empty_message">
                            <div style={{ flex: "1", aspectRatio: "1/1", borderRadius: "50%", border: "1px solid white" }}> <img src="/messenger.svg" alt="messenger logo" /> </div>
                            <div style={{ fontSize: "larger" }} >Your messages</div>
                            <div style={{ color: "gray" }}>Send private photos and messages to a friend or group</div>
                            <button onClick={() => setToggleSearchBar(true)} >Send Message</button>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Chat;
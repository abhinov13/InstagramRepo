import Message from "./Message/Message";
import MessageContainerViewHandler from "./MessageContainerViewHandler"

const MessageContainer = (props) => {

    const { messages,
        setMessage,
        sendMessage,
        username,
        inputRef } = MessageContainerViewHandler(props);

    return (
        <div style={style.containerWrapper}>
            <div style={style.messagesContainer}>
                {
                    messages?.map((message) => (
                        <Message
                            key={message.id}
                            message={message.message}
                            sender={message.sender}
                            src={message.senderProfileUrl}
                            loggedUsername={username} />
                    ))
                }
            </div>

            <div style={style.inputWrapper}>
                <div style={{ flex: "1", marginLeft: "2%" }}>
                    <input style={style.input}
                        type="text"
                        placeholder="Message"
                        onChange={(e) => { setMessage(e.target.value) }}
                        ref={inputRef}
                        onKeyDown={(e) => { if (e.key === "Enter") sendMessage() }}
                    />
                </div>
                <div style={style.send} onClick={() => sendMessage()}>
                    Send
                </div>
            </div>
        </div>)
}

const style = {
    containerWrapper: {
        display: "flex",
        flex: "1",
        flexDirection: "column",
        alignItems: "center",
        height: "98%",
    },
    messagesContainer: {
        display: "flex",
        flexDirection: "column-reverse",
        //        justifyContent: "flex-end",
        width: "96%",
        height: "93%",
        marginBottom: "1%",
        overflowY: "scroll",
    },
    inputWrapper: {
        display: "flex",
        flexDirection: "row",
        height: "5%",
        width: "98%",
        border: "1px solid white",
        borderRadius: "10px",
        alignItems: "center"
    },
    input: {
        height: "100%",
        width: "98%",
        backgroundColor: "rgba(0,0,0,0)",
        border: "0",
        outline: "0",
        color: "white",
        padding: "1%"
    },
    send: {
        width: "10%",
        minWidth: "41px",
        height: "100%",
        borderLeft: "1px solid white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#2C95D9",
        cursor: "pointer"
    }
}

export default MessageContainer;
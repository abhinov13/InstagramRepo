const Message = (props) => {

    const isLogged = (props.sender === props.loggedUsername);

    return (
        <div style={isLogged ? { ...style.wrapper, ...{ flexDirection: "row-reverse" } } : style.wrapper}>
            <div style={style.imgContainer}>
                <img style={style.image}
                    src={props.src ? props.src : "/user.svg"}
                    alt="user avatar"
                />
            </div>
            <div style={isLogged ? {...style.message, backgroundColor: "#227093"} : style.message}>
                {props.message}
            </div>
        </div>
    )
}

const style = {
    wrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexShrink: "0",
        width: "100%",
        marginTop: "2%"
    },
    imgContainer: {
        width: "3%",
        minWidth: "25px",
        aspectRatio: "1/1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "50%",
        backgroundColor: "#222222"
    },
    message: {
        marginLeft: "1%",
        marginRight: "1%",
        backgroundColor: "#222222",
        borderRadius: "10px",
        paddingTop: "1%",
        paddingBottom: "1%",
        paddingLeft: "2%",
        paddingRight: "2%",
        maxWidth: "50%"
    }
}

export default Message;
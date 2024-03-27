import { useUser } from "../../../../../../../Context/UserContext/UserContext";

const SearchChatUser = (props) => {

    const { username } = useUser();

    return (
        <div style={style.searchUserWrapper}>
            <div style={style.imageWrapper}>
                <img
                    style={style.userImage}
                    src={props.src ? props.src : "/user.svg"}
                    alt="user avatar" />
            </div>
            <div style={style.userData}>
                <div>{props.name}</div>
                <div>{props.username}</div>
            </div>
            <button style={style.chatButton} onClick={() => props.chat(username, props.username)}>
                Chat
            </button>
        </div>)
}

const style = {
    searchUserWrapper: {
        width: "96%",
        height: "17%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    imageWrapper: {
        height: "80%",
        aspectRatio: "1/1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    userImage: {
        height: "100%",
        width: "100%",
        borderRadius: "50%",
        objectFit: "cover",
        backgroundColor: "#151515"
    },
    userData: {
        flex: "1",
        marginLeft: "2%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    chatButton: {
        height: "50%",
        width: "20%",
        backgroundColor: "#2C95D9",
        border: "0",
        borderRadius: "10px",
        outline: "0",
        cursor: "pointer",
        color: "white",
        fontWeight: "bold"
    }
}

/**
 * <div style={{ height: "100%" }}>
            <img
                style={{
                    height: "90%",
                    aspectRatio: "1/1",
                    borderRadius: "50%"
                }}
                src="/user.svg"
                alt="user avatar" />
        </div>
        <div style={{ flex: "1" }}>
            <div>{props.username}</div>
            <div>{props.username}</div>
        </div>

        <button style={{height: "70%"}}>
            Chat
        </button>
 * 
 */

export default SearchChatUser;
import SearchChatUser from "./SearchChatUser/SearchChatUser";
import SearchMessageUserViewHandler from "./SearchMessageUserViewHandler";

const SearchMessageUser = (props) => {

    const { searchResults,
        setSearchKey,
        chat,
        close } = SearchMessageUserViewHandler(props);

    return (
        <div className="search_user_wrapper">
            <div>
                <div style={{ height: "7%", borderBottom: "1px solid #555555", paddingTop: "1%", paddingBottom: "1%" }}>
                    <div style={style.header}>
                        New Message
                    </div>
                    <img src="/close.svg"
                        alt="close"
                        style={style.close}
                        onClick={close}
                    />
                </div>
                <div style={{ height: "7%", borderBottom: "1px solid #555555", paddingTop: "1%", paddingBottom: "1%" }}>
                    <label htmlFor="search" style={style.inputField}>
                        To:
                    </label>
                    <input name="search"
                        type="text"
                        style={style.input}
                        placeholder="Search"
                        onChange={(e) => (setSearchKey(e.target.value))}
                    />
                </div>
                <div style={style.searchResults} >
                    {
                        searchResults?.map((result) =>
                            <SearchChatUser
                                username={result.username}
                                name={result.name}
                                src={result.profilePictureUrl}
                                chat={chat}
                                close={close}
                            />)
                    }
                </div>
                {/**
                 * <div style={style.chatButtonContainer}>
                    <button onClick={chat} style={style.chatButton}>Chat</button>
                </div>
                 */}
            </div>
        </div>
    )
};

const style = {
    header: {
        width: "90%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: "0"
    },
    close: {
        marginLeft: "-100%",
        aspectRatio: "1/1",
        height: "90%",
        cursor: "pointer"
    },
    inputField: {
        height: "100%",
        width: "10%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    input: {
        flex: "1",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0)",
        color: "white",
        outline: "0",
        border: "0",
        fontSize: "1rem",
        paddingTop: "1%"
    },
    chatButtonContainer: {
        height: "10%",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    chatButton: {
        height: "70%",
        width: "90%",
        borderRadius: "10px",
        backgroundColor: "#2C95D9",
        border: "0",
        outline: "0",
        color: "white",
        fontWeight: "bold"
    },
    searchResults: {
        flex: "1",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        overflowY: "scroll",
        marginBottom: "2%"
    }

}

export default SearchMessageUser;
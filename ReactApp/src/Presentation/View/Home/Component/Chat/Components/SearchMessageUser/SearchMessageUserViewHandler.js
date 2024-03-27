import { useEffect } from "react";
import { useState } from "react";
import { SearchUser } from "../../../../../../../Domain/UseCase/Search/SearchUser";
import { CreatePrivateLobby } from "../../../../../../../Domain/UseCase/Chat/Chat";

const SearchMessageUserViewHandler = (props) => {

    const [searchKey, setSearchKey] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        SearchUser()
            .execute(searchKey)
            .then(({ data }) => {
                if (data) {
                    setSearchResults(data);
                }
            })
    }, [searchKey])

    function chat(username1, username2) {
        CreatePrivateLobby()
            .execute(username1, username2)
            .then(({ data }) => {
                props.setLobby(data.id);
                close();
            })
    }

    function close() {
        props.setToggleSearchBar(false);
    }

    return {
        searchResults,
        setSearchKey,
        chat,
        close
    }
};

export default SearchMessageUserViewHandler;
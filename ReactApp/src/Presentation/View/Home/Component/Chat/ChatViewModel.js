import { useEffect, useState } from "react";
import { useUser } from "../../../../Context/UserContext/UserContext";
import { GetLobbies } from "../../../../../Domain/UseCase/Chat/Chat";

const ChatViewModel = (props) => {

    const { username } = useUser();
    const [lobbies, setLobbies] = useState([]);
    const [toggleSearchBar, setToggleSearchBar] = useState(false);
    const [lobby, setLobby] = useState(null);

    useEffect(() => {
        GetLobbies()
            .execute(username)
            .then(({ data }) => {
                if (data) {
                    console.log(data);
                    setLobbies(data);
                }
            })
    }, [username])

    return {
        username,
        lobbies,
        toggleSearchBar,
        setToggleSearchBar,
        lobby,
        setLobby
    }
};

export default ChatViewModel;
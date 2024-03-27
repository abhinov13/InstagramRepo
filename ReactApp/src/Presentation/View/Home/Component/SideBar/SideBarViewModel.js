import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../../Context/UserContext/UserContext";
import { useWebSocket } from "../../../../Context/WSContext/WSContext";
const SideBarViewModel = () => {

    const [create, setCreate] = useState(false);

    const { username } = useUser();
    const { type } = useWebSocket();
    const {setUsername} = useUser();

    const create_button_handler = () => {
        setCreate(true);
    }

    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/Home");
    }

    const goToSearch = () => {
        navigate("/Home/Search");
    }

    const goToNotifications = () => {
        navigate("/Home/Notifications");
    }

    function goToUser() {
        navigate("/home/user/" + username);
    }

    function goToChat() {
        navigate("/home/chat");
    }

    function logOut(){
        setUsername(null);
        navigate("/")
    }

    return {
        create,
        setCreate,
        create_button_handler,
        goToHome,
        goToSearch,
        goToNotifications,
        goToUser,
        type,
        goToChat,
        logOut
    }
}

export default SideBarViewModel;
import { useNavigate } from "react-router-dom";
import { Follow } from "../../../../../../Domain/UseCase/Follow/Follow";
import { useUser } from "../../../../../Context/UserContext/UserContext";

const SuggestedFriendViewHandler = (props) => {

    const {username} = useUser();
    const navigate = useNavigate();
    const {setUsername} = useUser();

    const onClickHandler = () => {
        const option = props.option;
        if(option === 'Follow')
        {
            Follow()
            .execute(username, props.username)
            .then(({data}) => {
                if(data != null)
                {
                    alert("Friend request sent successfully to " + props.username);
                    props.loadSuggestedFriends();
                }
            })
        }
        else if(option === 'Log Out')
        {
            setUsername(null);
            navigate("/");
        }
        else
        {
            console.log("Invalid Option passed in SuggestedFriendViewHandler for props = " + props);
        }
    }

    return {
        onClickHandler
    }
}

export default SuggestedFriendViewHandler;
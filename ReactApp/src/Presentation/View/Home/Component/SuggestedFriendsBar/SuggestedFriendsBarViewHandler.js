import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetRecommendedFriends } from "../../../../../Domain/UseCase/Follow/GetUsers";
import { useUser } from "../../../../Context/UserContext/UserContext";
import { MinQueue } from "heapify";
import GetUser from "../../../../../Domain/UseCase/User/GetUser";

const SuggestedFriendsViewHandler = () => {

    const navigate = useNavigate();

    const [src, setSrc] = useState(null);

    const goToRecommendedFriendsPage = () => {
        navigate("/Home/PeopleYouMayKnow");
    }

    const { username, name } = useUser();
    const [recommended, setRecommended] = useState([]);

    const loadSuggestedFriends = useCallback(() => {
        GetRecommendedFriends()
            .execute(username)
            .then(({ data }) => {
                if (data == null) return;
                const queue = new MinQueue();
                for (let i = 0; i < data.length; i++) {
                    queue.push(i, (-data[i].common.length));
                }

                const processed_data = [];

                for (let i = 0; i < 5 && i < data.length; i++) {
                    processed_data.push({ username: data[queue.peek()].user.username, name: data[queue.peek()].user.name, src: data[queue.peek()].user.profilePictureUrl });
                    queue.pop();
                }
                setRecommended(processed_data);
            });
    }, [username]);

    useEffect(() => {
        if (username) {
            GetUser()
                .execute(username)
                .then(({ data }) => {
                    if (data) {
                        setSrc(data.profilePictureUrl);
                    }
                })
        }
    }, [username])

    useEffect(
        () => {
            loadSuggestedFriends();
        }, [loadSuggestedFriends]
    );

    return {
        recommended,
        goToRecommendedFriendsPage,
        username,
        name,
        loadSuggestedFriends,
        src
    }
};

export default SuggestedFriendsViewHandler;
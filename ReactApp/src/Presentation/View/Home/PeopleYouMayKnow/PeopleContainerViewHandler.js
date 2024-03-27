import { useEffect } from "react";
import { useState } from "react";
import { useUser } from "../../../Context/UserContext/UserContext";
import { GetFollowing, GetRecommendedFriends } from "../../../../Domain/UseCase/Follow/GetUsers";

const PeopleContainerViewHandler = () => {

    const [people, setPeople] = useState([]);
    const { username } = useUser();
    const [following, setFollowing] = useState([]);

    useEffect(() => {
        if (username) {
            GetRecommendedFriends()
                .execute(username)
                .then(({ data }) => {
                    if (data != null) {
                        setPeople(data);
                    }
                });
            GetFollowing()
                .execute(username)
                .then(({ data }) => {
                    if (data) {
                        setFollowing(data);
                    }
                })
        }
    }, [username])

    return {
        people,
        following
    }
}

export default PeopleContainerViewHandler;
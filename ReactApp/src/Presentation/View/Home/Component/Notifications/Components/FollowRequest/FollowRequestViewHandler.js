import { useEffect, useState } from "react"
import { Follow, Unfollow } from "../../../../../../../Domain/UseCase/Follow/Follow";
import { useUser } from "../../../../../../Context/UserContext/UserContext";

const FollowRequestViewHandler = (props) => {

    const [following, setFollowing] = useState(false);
    const {username} = useUser();

    useEffect(
        () => {
            const followers = props.followers.map((user) => (user.username));
            if (followers.includes(props.username)) {
                setFollowing(true);
            }
        }, [props.followers, props.username]
    )

    const follow = () => {
        Follow()
            .execute(username, props.username)
            .then(
                ({ data }) => {
                    if (data != null) {
                        setFollowing(true);
                    }
                }
            );
    }

    const unfollow = () => {
        Unfollow()
            .execute(username, props.username)
            .then(({ data }) => {
                if (data != null) {
                    setFollowing(false);
                }
            })
    }

    return {
        following,
        follow,
        unfollow
    }
}

export default FollowRequestViewHandler;
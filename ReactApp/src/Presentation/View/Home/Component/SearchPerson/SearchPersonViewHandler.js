import { useEffect, useState } from "react";
import { Follow, Unfollow } from "../../../../../Domain/UseCase/Follow/Follow";
import { useUser } from "../../../../Context/UserContext/UserContext";
import { useNavigate } from "react-router-dom";

const SearchPersonViewHandler = (props) => {

    const { username } = useUser();
    const [followed, setFollowed] = useState(false);
    const [common, setCommon] = useState(null);
    const navigate = useNavigate();

    useEffect(
        () => {
            if (props.followers) {
                const followers = props.followers.map((user) => (user.username));
                if (followers.includes(props.username)) {
                    setFollowed(true);
                }
            }
        }, [props.followers, props.username]
    )

    useEffect(() => {
        if (props.common.length > 2) {
            setCommon('Followed by ' + props.common[0] + ', ' + props.common[1] + ' and '(props.common.length - 2) + ' others');
        }
        else if (props.common.length > 0) {
            if (props.common.length === 1)
                setCommon('Followed by ' + props.common[0]);
            else
                setCommon('Followed by ' + props.common[0] + ', ' + props.common[1]);
        }
        else {
            setCommon(null);
        }
    }, [props.common])

    const follow = () => {
        if (followed === false) {
            Follow()
                .execute(username, props.username)
                .then(
                    ({ data }) => {
                        if (data != null) {
                            setFollowed(true);
                        }
                    }
                )
        }
        else {
            Unfollow()
                .execute(username, props.username)
                .then(
                    ({ data }) => {
                        if (data != null) {
                            setFollowed(false);
                        }
                    }
                )
        }
    }

    function goToUser()
    {
        navigate("/home/user/"+props.username);
    }

    return {
        followed,
        follow,
        common,
        goToUser
    }
}

export default SearchPersonViewHandler;
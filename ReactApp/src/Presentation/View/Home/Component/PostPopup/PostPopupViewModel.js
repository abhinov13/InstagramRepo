import { useEffect, useState } from "react";
import GetUser from "../../../../../Domain/UseCase/User/GetUser";
import { useUser } from "../../../../Context/UserContext/UserContext";
import { GetFollowing } from "../../../../../Domain/UseCase/Follow/GetUsers";
import { Follow, Unfollow } from "../../../../../Domain/UseCase/Follow/Follow";
import { useNavigate } from "react-router-dom";

const PostPopupViewModel = (props) => {

    const [loadComments, setLoadComments] = useState(null);
    const [parentStyle, setParentStyle] = useState({ opacity: "0" });
    const [src, setSrc] = useState(null);
    const { username } = useUser();
    const [following, setFollowing] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setParentStyle({ opacity: "1" });
    }, [])

    useEffect(() => {
        GetUser()
            .execute(props.username)
            .then(({ data }) => {
                if (data) {
                    setSrc(data.profilePictureUrl);
                }
            });

        if (props.username && username && props.username !== username) {
            GetFollowing()
                .execute(username)
                .then(({ data }) => {
                    if (data) {
                        data = data.map((user) => (user.username));
                        if (data.includes(props.username))
                            setFollowing(true);
                    }
                })
        }

    }, [props.username, username])

    function getCommentLoader(loader) {
        setLoadComments(() => (loader));
    };

    function handleFollow() {
        if (!following) {
            Follow()
                .execute(username, props.username)
                .then(({ data }) => {
                    if (data) {
                        setFollowing(true);
                    }
                });
        }
        else {
            Unfollow()
                .execute(username, props.username)
                .then(({ data }) => {
                    if (data) {
                        setFollowing(false);
                    }
                })
        }
    }

    function goToUser()
    {
        navigate("/home/user/"+props.data.username);
    }

    return {
        getCommentLoader,
        loadComments,
        parentStyle,
        src,
        username,
        handleFollow,
        following,
        goToUser
    }
};

export default PostPopupViewModel;
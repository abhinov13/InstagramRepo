import { useEffect } from "react";
import { useState } from "react"
import { GetCommentLikes, LikeComment, UnLikeComment } from "../../../../../../Domain/UseCase/Comment/Like";
import { useUser } from "../../../../../Context/UserContext/UserContext";
import GetUser from "../../../../../../Domain/UseCase/User/GetUser";
import { useNavigate } from "react-router-dom";

export const CommentViewHandler = (props) => {

    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [src,setSrc] = useState();

    const { username } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        GetUser()
        .execute(props.username)
        .then(({data}) => {
            if(data)
            {
                setSrc(data.profilePictureUrl);
            }
        })
    }, [props.username])

    useEffect(() => {
        GetCommentLikes()
            .execute(props.username, props.id)
            .then(({ data }) => {
                if (data != null) {
                    if (data.map((data) => data.username).includes(username)) {
                        setLiked(true);
                        setLikeCount(data.length);
                    }
                }
            })
    }, [props.username, username, props.id])

    function likeComment() {
        LikeComment()
            .execute(props.id, props.username, username)
            .then(({ data }) => {
                if (data != null) {
                    setLiked(true);
                    const count = likeCount + 1;
                    setLikeCount(count);
                }
            })
    }

    function unlikeComment() {
        UnLikeComment()
            .execute(props.id, props.username, username)
            .then(({ data }) => {
                if (data != null) {
                    setLiked(false);
                    const count = likeCount - 1;
                    setLikeCount(count);
                }
            })
    }

    function handleLike() {
        if (liked) {
            unlikeComment();
        }
        else {
            likeComment();
        }
    }

    function goToUser()
    {
        navigate("/home/user/" + props.username);
    }

    return {
        liked,
        handleLike,
        likeCount,
        src,
        goToUser
    }
}
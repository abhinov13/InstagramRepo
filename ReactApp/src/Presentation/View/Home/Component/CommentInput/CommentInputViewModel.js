import { useRef, useState } from "react";
import { useUser } from "../../../../Context/UserContext/UserContext";
import { Create } from "../../../../../Domain/UseCase/Comment/Create";

const CommentInputViewModel = (props) => {

    const [comment, setComment] = useState({});
    const { username } = useUser();
    const [lock, setLock] = useState(false);

    const inputRef = useRef('');

    function updateComment(e) {
        if (!lock) {
            console.log("setting to ");
            console.log(e.target.value);
            setComment(e.target.value);
        }
    }

    function sendComment(e) {
        e.preventDefault();
        setLock(true);
        Create()
            .execute(username, comment, props.postUsername, props.postUserId)
            .then(() => {
                inputRef.current.value = '';
                setComment(null);
                setLock(false);
                if (props.loadComments != null) {
                    props.loadComments();
                }
                if (props.commentCount) {
                    const num = props.commentCount + 1;
                    props.setCommentCount(num);
                }
            });
    }

    return {
        updateComment,
        sendComment,
        inputRef
    }
}

export default CommentInputViewModel;
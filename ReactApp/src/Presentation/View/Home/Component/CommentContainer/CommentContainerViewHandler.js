import { useCallback, useEffect, useState } from "react";
import GetComments from "../../../../../Domain/UseCase/Comment/GetComments";
const CommentContainerViewHandler = (props) => {

    const [comments, setComments] = useState([]);

    const loadComments = useCallback(() => {
        GetComments()
            .execute({ username: props.data.username, id: props.data.id })
            .then(
                ({ data }) => {
                    setComments(data);
                }
            );
    }, [props.data.id, props.data.username])

    useEffect(
        () => {
            props.getCommentLoader(loadComments);
            loadComments();
        }, [props, loadComments]
    )

    return {
        comments
    }
};

export default CommentContainerViewHandler;
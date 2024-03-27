import CommentContainerViewHandler from "./CommentContainerViewHandler";
import Comment from "./Comment/Comment";

const CommentContainer = (props) => {
    const { comments } = CommentContainerViewHandler(props);
    return (
        <>
            {
                comments?.map(({ comment, creationDate, key }) => (
                    <Comment key={key} id={key.id} username={key.username} creationDate={creationDate} content={comment} />
                ))
            }
        </>
    );
}

export default CommentContainer;
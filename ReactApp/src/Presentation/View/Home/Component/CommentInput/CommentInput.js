import CommentInputViewModel from "./CommentInputViewModel";

const CommentInput = (props) => {
    const {
        updateComment,
        sendComment,
        inputRef } = CommentInputViewModel(props);

    return (
        <>

            <input ref={inputRef} type="text" placeholder="Add a comment" style={{ width: "85%" }} onChange={(e) => { updateComment(e) }} />
            <button onClick={(e) => { sendComment(e) }}>Send</button>

        </>)
}

export default CommentInput;
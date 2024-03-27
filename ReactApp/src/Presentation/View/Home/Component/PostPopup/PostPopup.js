import PostPopupViewModel from "./PostPopupViewModel";
import CommentContainer from "../CommentContainer/CommentContainer";
import CommentInput from "../CommentInput/CommentInput";

const PostPopup = (props) => {

    const { getCommentLoader,
        loadComments,
        parentStyle,
        src,
        username,
        following,
        handleFollow,
        goToUser
    } = PostPopupViewModel(props);

    return (
        <>
            <div className="banner_wrapper" style={{ display: "flex" }} onClick={(e) => { if (e.target === e.currentTarget) props.data.resetPopupParams() }}>
                <div className="post_popup_body" style={parentStyle}>
                    <div className="post_popup_image">
                        {
                            !props.data.src.endsWith('.mp4') ?
                                <img src={props.data.src} style={{ objectFit: "scale-down", height: "100%", width: "100%" }} alt="source" />
                                :
                                <video src={props.data.src} controls />
                        }
                    </div>
                    <div className="post_popup_description">
                        <div className="post_popup_owner">
                            <img src={src ? src : "/user.svg"} alt="user avatar" onClick={goToUser} style={{ cursor: "pointer" }} />
                            <div onClick={goToUser} style={{ cursor: "pointer" }}>
                                {props.data.username}
                            </div>
                            {
                                props.data.username !== username ?
                                    <div style={{ float: "right", marginLeft: "auto", marginRight: "10%", color: "#2C95D9", cursor: "pointer" }} onClick={handleFollow}>
                                        {
                                            following ? <>Unfollow</> : <>Follow</>
                                        }
                                    </div>
                                    : <></>
                            }
                        </div>
                        <div className="post_popup_description_value">
                            {props.data.description}
                        </div>
                        <div className="comment_section">
                            <CommentContainer data={{ username: props.data.username, id: props.data.id }} getCommentLoader={getCommentLoader} />
                        </div>
                        <div className="comment">
                            <CommentInput postUsername={props.data.username} postUserId={props.data.id} loadComments={loadComments} />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
};

export default PostPopup;
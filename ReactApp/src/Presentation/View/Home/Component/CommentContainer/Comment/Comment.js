import GetTimeElapsed from "../../../../../../Domain/UseCase/Utils/GetTimeElapsed";
import { CommentViewHandler } from "./CommentViewHandler";

const Comment = (props) => {

    const { liked, handleLike, likeCount, src, goToUser } = CommentViewHandler(props);

    return (
        <div className="comment_wrapper">
            <img src={src ? src : "/user.svg"} className="comment_user_img" alt="user" onClick={goToUser}/>
            <div>
                <div className="comment_content">
                    <div><span style={{ fontWeight: "600", cursor: "pointer" }} onClick={goToUser}>{props.username} </span>
                        {props.content}
                    </div>
                    <img
                        src={liked ? "/redHeart.svg" : "/heart.svg"}
                        alt="like"
                        style={{ height: "60%", alignSelf: "center", marginLeft: "2%" }}
                        onClick={handleLike}
                    />
                </div>
                <div className="comment_options">
                    <div>{GetTimeElapsed(new Date(props.creationDate))}</div>
                    <div>{likeCount} likes</div>
                    {/**
                    <div>Reply</div>
                     */}
                </div>
            </div>

        </div>

    )
};

export default Comment;
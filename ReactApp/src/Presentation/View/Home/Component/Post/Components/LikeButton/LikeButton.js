import LikeButtonViewHandler from "./LikeButtonViewHandler";

/**
 * @param {{username, postUsername, postUserId}} props  
 */

const LikeButton = (props) => {

    const {
        toggleLike,
        style
    } = LikeButtonViewHandler(props);

    return (
        <div className="liked" onClick={toggleLike}>
            <img src="/heart.svg" style={style.notLike} alt="not liked" />
            <img src="/redHeart.svg" style={style.like} alt="liked" />
        </div>

    )
}

export default LikeButton;
const UserPost = (props) => {
    return (
        <div onClick={() => { props.getPopupParams(props.post) }}>
            {!props.post.src.endsWith(".mp4") ?
                <img src={props.post.src} alt="post" />
                :
                <div>
                    <video src={props.post.src} alt="post" />
                    <div> <img src="/play.svg" alt="play" /> </div>
                </div>}
            <div className="user_post_item">{props.post.likeCount} Like {props.post.commentCount} Comment</div>
        </div>
    )
}

export default UserPost;

//
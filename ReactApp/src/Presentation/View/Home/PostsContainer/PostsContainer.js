import Post from "../Component/Post/Post";
import PostPopup from "../Component/PostPopup/PostPopup";
import PostContainerViewModel from "./PostsContainerViewModel";
const PostsContainer = (props) => {
    const {
        getPopupParams,
        data,
        postUsername
    } = PostContainerViewModel(props);

    return (
        <>
            {data != null ? <PostPopup data={data} username={postUsername} /> : null}
            <div className="post_container">
                {
                    props.posts.map((val) => (
                        <Post key={val.src}
                            username={val.username}
                            id={val.id}
                            src={val.src}
                            description={val.description}
                            creationDate={val.creationDate}
                            getPopupParams={getPopupParams}
                            likedBy={val.likedBy}
                            commentCount={val.commentCount}
                            userSrc={val.userSrc}
                        />))
                }
            </div>
        </>
    )
}

export default PostsContainer;
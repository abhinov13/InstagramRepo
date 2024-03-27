import { useParams } from "react-router-dom";
import UserViewHandler from "./UserViewHandler";
import UserPost from "./Components/UserPost/UserPost";
import PostPopup from "../Home/Component/PostPopup/PostPopup";
import ProfilePictureUploader from "./Components/ProfilePictureUploader/ProfilePictureUploader";

const User = () => {

    const { profileUsername } = useParams();
    const { name,
        username,
        following,
        follow,
        unfollow,
        postCount,
        followerCount,
        followingCount,
        posts,
        data,
        getPopupParams,
        profileUploader,
        showProfileUploader,
        src
    } = UserViewHandler(profileUsername);

    return (
        <>
            {data != null ? <PostPopup data={data} /> : null}
            {username === profileUsername && profileUploader ? <ProfilePictureUploader showProfileUploader={showProfileUploader} /> : null}
            <div className="userwrapper">
                <div className="userdata">
                    <div className="useravatar">
                        <img src={src} alt="user avatar" onClick={() => showProfileUploader(true)} />
                    </div>
                    <div className="usercontrols">
                        <div>{profileUsername}
                            {profileUsername !== username ? following ? <div className="user_follow_button" onClick={unfollow}> Unfollow </div> : <div className="user_follow_button" onClick={follow}> Follow </div> : <></>}
                        </div>
                        <div>
                            <div>{postCount} posts</div>
                            <div>{followerCount} followers</div>
                            <div>{followingCount} following</div>
                        </div>
                        <div>{name}</div>
                    </div>
                </div>
                <div className="user_posts">
                    {posts.map((post) => {
                        return <UserPost key={post.src} post={post} getPopupParams={getPopupParams} />;
                    })}
                </div>
            </div>
        </>
    )
}

export default User;
import { useCallback, useEffect, useState } from "react";
import GetUser from "../../../Domain/UseCase/User/GetUser";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../Context/UserContext/UserContext";
import { GetFollowing } from "../../../Domain/UseCase/Follow/GetUsers";
import { Follow, Unfollow } from "../../../Domain/UseCase/Follow/Follow";
import { GetPostsForUser } from "../../../Domain/UseCase/Post/GetPosts";
import { GetFollowerCount, GetFollowingCount } from "../../../Domain/UseCase/Follow/GetCount";

const UserViewHandler = (profileUsername) => {

    const [name, setName] = useState(null);

    const { username } = useUser();

    const [following, setFollowing] = useState(false);

    const [postCount, setPostCount] = useState(0);
    const [followerCount, setFollowerCount] = useState(0);
    const [followingCount, setFollowingCount] = useState(0);
    const [posts, setPosts] = useState([]);
    const [profileUploader, showProfileUploader] = useState(false);
    const [src, setSrc] = useState('/user.svg');

    const navigate = useNavigate();

    const setCounts = useCallback(
        () => {
            GetPostsForUser()
                .execute(profileUsername)
                .then(({ data }) => {
                    if (data != null) {
                        data = data.map((post) => ({...post, creationDate: new Date(post.creationDate)}));
                        data = data.sort((post1,post2) => (post2.creationDate - post1.creationDate));
                        setPosts(data);
                        setPostCount(data.length);
                    }
                });

            GetFollowerCount()
                .execute(profileUsername)
                .then(({ data }) => {
                    if (data != null) {
                        setFollowerCount(data);
                    }
                });

            GetFollowingCount()
                .execute(profileUsername)
                .then(({ data }) => {
                    if (data != null) {
                        setFollowingCount(data);
                    }
                })
        }, [profileUsername]
    )

    useEffect(() => {
        GetUser()
            .execute(profileUsername)
            .then(({ data }) => {
                if (data === null || data.name === undefined) {
                    navigate("/NotFound");
                }
                else {
                    setName(data.name);
                    if (data.profilePictureUrl)
                        setSrc(data.profilePictureUrl)
                    setCounts();
                }
            })
    }, [navigate, profileUsername, setCounts])

    useEffect(() => {
        if (name != null && profileUsername !== username)//user exists and is not the same as user logged in
        {
            GetFollowing()
                .execute(username)
                .then(({ data }) => {
                    if (data.map((user) => (user.username)).includes(profileUsername)) setFollowing(true);
                });
        }
    }, [name, username, profileUsername]);

    const follow = () => {
        Follow()
            .execute(username, profileUsername)
            .then(({ data }) => {
                if (data != null) {
                    setFollowing(true);
                }
            })
    }

    const unfollow = () => {
        Unfollow()
            .execute(username, profileUsername)
            .then(({ data }) => {
                if (data != null) {
                    setFollowing(false);
                }
            })
    }

    const [data, setData] = useState(null);

    function resetPopupParams() {
        setData(null);
    }

    function getPopupParams(data) {
        data = { ...data, resetPopupParams };
        setData(data);
    }

    return {
        name,
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
    }
};

export default UserViewHandler;
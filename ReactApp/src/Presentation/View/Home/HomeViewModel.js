import { useCallback, useState } from "react";
import GetPosts from "../../../Domain/UseCase/Post/GetPosts";

const HomeViewModel = () => {

    const [posts, setPosts] = useState([]);

    const postLoader = useCallback(() => {
        GetPosts()
            .execute()
            .then(({ data }) => {
                setPosts(data);
            })
    }, [])

    return {
        postLoader,
        posts
    }
};

export default HomeViewModel;
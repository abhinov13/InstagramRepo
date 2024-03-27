import { getAll, getPostsOfUser } from "../../../Data/Repository/post_repository"

const GetPosts = () => {
    return {
        async execute() {
            const { data, error } = await getAll();
            return { data, error };
        }
    }
}

export const GetPostsForUser = () => {
    return {
        async execute(username) {
            const {data, error} = await getPostsOfUser(username);
            return {data,error};
        }
    }
}

export default GetPosts;
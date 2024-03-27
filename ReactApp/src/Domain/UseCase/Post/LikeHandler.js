import { likePost, unlikePost } from "../../../Data/Repository/post_repository"

export const Like = () => {
    return {
        execute: async (username, postUsername, postId) => {
            const { data, error } = await likePost({ username, postUsername, postId });
            return { data, error };
        }
    }
}

export const Unlike = () => {
    return {
        execute: async (username, postUsername, postId) => {
            const { data, error } = await unlikePost({ username, postUsername, postId });
            return { data, error };
        }
    }
}
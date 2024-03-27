import { unlike } from "../../../Data/DataSource/comment_datasource";
import { getUsersWhoLiked, likeComment } from "../../../Data/Repository/comment_repository"

export const LikeComment = () => {
    return {
        execute: async (postId, postUsername, username) => {
            const params = { likedId: postId, likedUsername: postUsername, username: username };
            const { data, error } = await likeComment(params);
            return { data, error };
        }
    }
}

export const UnLikeComment = () => {
    return {
        execute: async (postId, postUsername, username) => {
            const params = { likedId: postId, likedUsername: postUsername, username: username };
            const { data, error } = await unlike(params);
            return { data, error };
        }
    }
}


export const GetCommentLikes = () => {
    return {
        execute: async (username, id) => {
            const params = { username, id };
            const { data, error } = await getUsersWhoLiked(params);
            return { data, error };
        }
    }
}
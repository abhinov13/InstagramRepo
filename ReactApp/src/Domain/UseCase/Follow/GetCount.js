import { countFollowers, countFollowing } from "../../../Data/Repository/follower_repository"

export const GetFollowerCount = () => {
    return {
        execute: async (username) => {
            const { data, error } = await countFollowers(username);
            return { data, error };
        }
    }
}

export const GetFollowingCount = () => {
    return {
        execute: async (username) => {
            const { data, error } = await countFollowing(username);
            return { data, error };
        }
    }
}
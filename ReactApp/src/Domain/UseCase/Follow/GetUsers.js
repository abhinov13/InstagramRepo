import { findRecommendedPeople, loadFollowRequests, loadFollowers, loadFollowing } from "../../../Data/Repository/follower_repository"

export const GetRecommendedFriends = () => {
    return {
        execute: async(username) => {
            const {data,error} = await findRecommendedPeople(username);
            return {data,error};
        }
    }
}

export const GetFollowers = () => {
    return {
        execute: async(username) => {
            const {data,error} = await loadFollowers(username);
            return {data,error};
        }
    }
}

export const GetFollowing = () => {
    return {
        execute: async(username) => {
            const {data,error} = await loadFollowing(username);
            return {data,error};
        }
    }
}

export const GetFollowRequests = () => {
    return {
        execute: async(username) => {
            const {data,error} = await loadFollowRequests(username);
            return {data,error};
        }
    }
}
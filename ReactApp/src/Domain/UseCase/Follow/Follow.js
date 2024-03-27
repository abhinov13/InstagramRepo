import { followRequest, unfollowRequest } from "../../../Data/Repository/follower_repository"

export const Follow = () => {
    return {
        execute: async (sender,receiver) => {
            const {data,error} = await followRequest({sender,receiver});
            return {data,error};
        }
    }
}

export const Unfollow = () => {
    return {
        execute: async (sender,receiver) => {
            const {data,error} = await unfollowRequest({sender,receiver});
            return {data,error};
        }
    }
}
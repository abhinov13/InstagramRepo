import {
    follow,
    getFollowerRequests,
    getRecommendation,
    unfollow,
    getFollowers,
    getFollowing,
    getFollowerCount,
    getFollowingCount
} from "../DataSource/follower_datasource"

export const findRecommendedPeople = async (username) => {
    try {
        const {data} = await getRecommendation(username);
        console.log("fetching recommended friends");
        return { data: data, error: null };
    } catch (error) {
        console.log("error occurred while fetching friends");
        console.log(error);
        return { data: null, error: error };
    }
}

export const followRequest = async (params) => {
    try {
        const {data} = await follow(params);
        console.log("sending follow request from " + params.sender + " to " + params.receiver);
        return { data: data, error: null };
    } catch (error) {
        console.log("error occurred while sending follow request from " + params.sender + " to " + params.receiver);
        console.log(error);
        return { data: null, error: error };
    }
}

export const unfollowRequest = async (params) => {
    try {
        const {data} = await unfollow(params);
        console.log("sending unfollow request from " + params.sender + " to " + params.receiver);
        return { data: data, error: null };
    } catch (error) {
        console.log("error occurred while sending unfollow request from " + params.sender + " to " + params.receiver);
        console.log(error);
        return { data: null, error: error };
    }
}

export const loadFollowRequests = async (username) => {
    try {
        const {data} = await getFollowerRequests(username);
        console.log("getting follow requests for " + username);
        return { data: data, error: null };
    } catch (error) {
        console.log("error occurred while getting follow requests for " + username);
        console.log(error);
        return { data: null, error: error };
    }
}

export const loadFollowers = async (username) => {
    try {
        const {data} = await getFollowers(username);
        console.log("getting followers of " + username);
        return { data: data, error: null };
    } catch (error) {
        console.log("error occurred while getting followers of " + username);
        console.log(error);
        return { data: null, error: error };
    }
}

export const loadFollowing = async (username) => {
    try {
        const {data} = await getFollowing(username);
        console.log("getting users followed by " + username);
        return { data: data, error: null };
    } catch (error) {
        console.log("error occurred while getting users followed by " + username);
        console.log(error);
        return { data: null, error: error };
    }
}

export const countFollowers = async (username) => {
    try {
        const {data} = await getFollowerCount(username);
        console.log("getting follower count for " + username);
        return { data: data, error: null };
    } catch (error) {
        console.log("error occurred while getting follower count for " + username);
        console.log(error);
        return { data: null, error: error };
    }
}

export const countFollowing = async (username) => {
    try {
        const {data} = await getFollowingCount(username);
        console.log("getting following count for " + username);
        return { data: data, error: null };
    } catch (error) {
        console.log("error occurred while getting following count for " + username);
        console.log(error);
        return { data: null, error: error };
    }
}
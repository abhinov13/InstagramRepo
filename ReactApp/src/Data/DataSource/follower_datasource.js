import axios from "axios";

const link = 'http://13.51.48.38:8080/';

export const getRecommendation = (username) => {
    const call = link + 'getRecommendedPeople/' + username;
    return axios.get(call);
}

/**
 * @param {{sender,receiver}} data 
 */
export const follow = (data) => {
    const call = link + 'follow';
    return axios.post(call,data);
}

/**
 * @param {{sender,receiver}} data 
 */
export const unfollow = (data) => {
    const call = link + 'unfollow';
    return axios.post(call,data);
}

export const getFollowerRequests = (username) => {
    const call = link + 'getFollowerRequests/' + username
    return axios.get(call);
}

export const getFollowers = (username) => {
    const call = link + 'getFollowers/' + username
    return axios.get(call);
}

export const getFollowing = (username) => {
    const call = link + 'getFollowing/' + username
    return axios.get(call);
}

export const getFollowerCount = (username) => {
    const call = link + 'getFollowerCount/' + username
    return axios.get(call);
}

export const getFollowingCount = (username) => {
    const call = link + 'getFollowingCount/' + username
    return axios.get(call);
}
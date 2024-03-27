import axios from "axios";
const link = 'http://13.51.48.38:8080/comment';

/**
 * @param {{username, comment, replyToUsername, postUsername, postUserId, replyToId}} data 
 */
export const create = (data) => {
    const call = link + '/add';
    return axios.post(call, data);
}

/**
 * @param {postUsername, postId} post 
 */
export const getPostComment = (post) => {
    const call = link + '/post/' + post.username + '/' + post.id;
    return axios.get(call);
}

/**
 * @param {replyUsername, replyId} post 
 */
export const getReplyComment = (reply) => {
    const call = link + '/reply/' + reply.username + '/' + reply.id;
    return axios.get(call);
}

export const like = (params) => {
    const call = link + '/like';
    return axios.post(call, params);
}

export const unlike = (params) => {
    const call = link + '/unlike';
    return axios.post(call, params);
}

export const getLikes = ({ username, id }) => {
    const call = link + "/getLikes/" +username + "/" + id;
    return axios.get(call);
}
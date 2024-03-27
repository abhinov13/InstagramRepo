import axios from "axios";
const link = 'http://13.51.48.38:8080/posthandler';

export const getPosts = () => {
    const call = link + '/getPosts';
    return axios.get(call);
}

export const getPostsForUser = (username) => {
    const call = link + '/getPosts/'+username;
    return axios.get(call);
}
/**
 * @param {{file, username, description}} data 
 */
export const save = (data) => {
    const call = link + '/upload';
    return axios.post(call, data, {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    });
}

export const like = (data) => {
    const call = link + '/like';
    return axios.post(call,data);
}

export const unlike = (data) => {
    const call = link + '/unlike';
    return axios.post(call,data);
}
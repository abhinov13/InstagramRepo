import axios from "axios";
const link = 'http://13.51.48.38:8080/user';

/**
 * @param {{name,username,mobile,password,email}} user
 */

export function register(user) {
    const call = link + '/create';
    return axios.post(call, user);
}

/**
 * @param {{username,password}} user
 */
export function authenticate(user) {
    const call = link + '/authenticate';
    return axios.post(call, user);
}

/**
 * @param {string} username 
 */
export function validateUsername(username) {
    const call = link + '/validate/username';
    return axios.post(call, username, { headers: { 'Content-Type': 'text/plain' } });
}
/**
 * @param {string/number} mobileOrEmail 
 */
export function validateMobileOrUsername(mobileOrEmail) {
    const call = link + '/validate/mobileOrEmail';
    return axios.post(call, mobileOrEmail, { headers: { 'Content-Type': 'text/plain' } });
}

export function getUser(username) {
    const call = link + '/getUser/' + username;
    return axios.get(call);
}

export function uploadProfilePicture(data) {
    const call = link + '/updateProfilePicture';
    return axios.post(call, data, {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    });
}

export function removeProfilePicture(username) {
    const call = link + '/removeProfilePicture';
    return axios.post(call, username, { headers: { 'Content-Type': 'text/plain' } });
}
import axios from "axios"
const link = 'http://13.51.48.38:8080/';

export const check = (username) => {
    const call = link + 'checkNotifications';
    return axios.post(call, username, { headers: { "Content-Type": "text/plain" } });
}
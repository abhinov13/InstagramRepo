import axios from "axios";

const link = 'http://13.51.48.38:8080/search/';

export const searchUser = (key) => {
    const call = link + 'user';
    console.log("param ");
    console.log(key);
    return axios.post(call, key, { headers: { 'Content-Type': 'text/plain' } });
}
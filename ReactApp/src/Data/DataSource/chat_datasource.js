import axios from "axios";
const link = "http://13.51.48.38:8080/chat/"

export const getPrivateLobby = (params) => {
    const call = link + "createPrivateLobby";
    console.log(params);
    return axios.post(call, params);
}

export const getLobbies = (username) => {
    const call = link + "getLobbies/" + username;
    return axios.get(call);
}

export const getMessages = (lobbyId) => {
    const call = link + "getMessages/" + lobbyId;
    return axios.get(call);
}

export const send = (params) => {
    const call = link + "message";
    return axios.post(call, params);
}
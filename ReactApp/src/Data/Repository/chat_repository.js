import { getLobbies, getMessages, getPrivateLobby, send } from "../DataSource/chat_datasource";


export const createLobby = async (params) => {
    try {
        const { data } = await getPrivateLobby(params);
        console.log('searching lobby');
        return { data: data, error: null };
    }
    catch (error) {
        console.log('error occurred while searching lobby');
        console.log(error);
        return { data: null, error: error };
    }
}

export const findLobbies = async (username) => {
    try {
        const { data } = await getLobbies(username);
        console.log('getting lobbies');
        return { data: data, error: null };
    }
    catch (error) {
        console.log('error occurred while getting lobbies');
        console.log(error);
        return { data: null, error: error };
    }
}

export const loadMessages = async (lobbyId) => {
    try {
        const { data } = await getMessages(lobbyId);
        console.log('getting messages');
        return { data: data, error: null };
    }
    catch (error) {
        console.log('error occurred while getting messages');
        console.log(error);
        return { data: null, error: error };
    }
}

export const sendMessage = async (params) => {
    try {
        const { data } = await send(params);
        console.log('sending message');
        return { data: data, error: null };
    }
    catch (error) {
        console.log('error occurred while sending message');
        console.log(error);
        return { data: null, error: error };
    }
}
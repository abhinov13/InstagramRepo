import { createLobby, findLobbies, loadMessages, sendMessage } from "../../../Data/Repository/chat_repository";

export const GetLobbies = () => {
    return {
        async execute(username) {
            const { data, error } = await findLobbies(username);
            return { data, error };
        }
    }
}

export const GetMessages = () => {
    return {
        async execute(lobbyId) {
            const { data, error } = await loadMessages(lobbyId);
            return { data, error };
        }
    }
}

export const CreatePrivateLobby = () => {
    return {
        async execute(username1, username2) {
            const param = { users: [username1, username2] };
            const { data, error } = await createLobby(param);
            return { data, error };
        }
    }
}

export const Message = () => {
    return {
        async execute(message, sender, lobbyId) {
            const param = { message, sender, lobbyId };
            const { data, error } = await sendMessage(param);
            return { data, error };
        }
    }
}
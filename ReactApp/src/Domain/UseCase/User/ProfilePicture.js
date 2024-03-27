import { removeProfPic, updateProfilePicture } from "../../../Data/Repository/user_repository";

export const UploadProfilePicture = () => {
    return {
        execute: async (username, file) => {
            var param = new FormData();
            param.append('file', file);
            param.append('username', username);
            const { data, error } = await updateProfilePicture(param);
            return { data, error };
        }
    }
}

export const RemoveProfilePicture = () => {
    return {
        execute: async (username) => {
            const { data, error } = await removeProfPic(username);
            return { data, error };
        }
    }
}
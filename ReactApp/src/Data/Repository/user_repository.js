import { authenticate, validateMobileOrUsername, validateUsername, register, getUser, uploadProfilePicture, removeProfilePicture } from "../DataSource/user_datasource"

export const registerUser = async (user) => {
    try {
        const { data } = await register(user);
        console.log("registering user");
        return { data: data, error: null };

    } catch (error) {
        console.log("error occurred while registering user");
        console.log(error);
        return { data: null, error: error };
    }
}

export const checkUsername = async (username) => {
    try {
        const { data } = await validateUsername(username);
        console.log("validating user");
        return { data: data, error: null };

    } catch (error) {
        console.log("error occurred while validating user");
        console.log(error);
        return { data: null, error: error };
    }
}

export const authenticateUser = async (user) => {
    try {
        const { data } = await authenticate(user);
        console.log("authenticating user");
        return { data: data, error: null };
    } catch (error) {
        console.log("error occurred while authenticating user");
        console.log(error);
        return { data: null, error: error };
    }
}

export const validateUniqueCredential = async (param) => {
    try {
        const { data } = await validateMobileOrUsername(param);
        console.log("validating user email or mobile");
        return { data: data, error: null };
    } catch (error) {
        console.log("error occurred while validating email or mobile");
        console.log(error);
        return { data: null, error: error };
    }
}

export const findUser = async (username) => {
    try {
        const { data } = await getUser(username);
        console.log("Getting user data");
        return { data: data, error: null };
    } catch (error) {
        console.log("error occurred while getting user data");
        console.log(error);
        return { data: null, error: error };
    }
}

export const updateProfilePicture = async (params) => {
    try {
        const { data } = await uploadProfilePicture(params);
        console.log("Uploading profile picture");
        return { data: data, error: null };
    } catch (error) {
        console.log("error occurred while uploading profile picture");
        console.log(error);
        alert("please choose an image of size under 10MB");
        return { data: null, error: error };
    }
}

export const removeProfPic = async (username) => {
    try {
        const { data } = await removeProfilePicture(username);
        console.log("Removing profile picture for username " + username);
        return { data: data, error: null };
    } catch (error) {
        console.log("error occurred while removing profile picture for " + username);
        console.log(error);
        return { data: null, error: error };
    }
}
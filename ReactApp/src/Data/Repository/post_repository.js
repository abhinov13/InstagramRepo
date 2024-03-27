import { getPosts, getPostsForUser, like, save, unlike } from "../DataSource/post_datasource";

export const getAll = async () => {
    try {
        const { data } = await getPosts();
        console.log('getting posts');
        return { data: data, error: null };
    }
    catch (error) {
        console.log('error occurred while getting posts');
        console.log(error);
        return { data: null, error: error };
    }
}

export const getPostsOfUser = async (username) => {
    try {
        const { data } = await getPostsForUser(username);
        console.log('getting posts for user ' + username);
        return { data: data, error: null };
    }
    catch (error) {
        console.log('error occurred while getting posts for user ' + username);
        console.log(error);
        return { data: null, error: error };
    }
}

export const create = async (post) => {
    try {
        const { data } = await save(post);
        console.log('creating post');
        return { data: data, error: null };

    } catch (error) {
        console.log('error occurred while creating post');
        console.log(error);
        alert("please choose an image of size under 10MB");
        return { data: null, error: error };
    }
}

export const likePost = async (params) => {
    try {
        const {data} = await like(params);
        console.log('liking post');
        return {data: data, error: null};
    } catch (error) {
        console.log('error occurred while liking post');
        console.log(error);
        return {data: null, error: error};
    }
}

export const unlikePost = async (params) => {
    try {
        const {data} = await unlike(params);
        console.log('unliking post');
        return {data: data, error: null};
    } catch (error) {
        console.log('error occurred while unliking post');
        console.log(error);
        return {data: null, error: error};
    }
}
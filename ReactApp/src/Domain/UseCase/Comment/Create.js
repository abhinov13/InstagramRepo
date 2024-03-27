import { createComment } from "../../../Data/Repository/comment_repository";

export const Create = () => {
    return {
        async execute(username, comment, postUsername, postUserId) {
            const param = { username, comment, postUsername, postUserId };
            const { data, error } = await createComment(param);
            return { data, error };
        }
    }
}

export const CreateReply = () => {
    return {
        async execute(username, comment, replyToUsername, replyToId) {
            const param = {username, comment, replyToUsername, replyToId};
            const { data, error } = await createComment(param);
            return { data, error };
        }
    }
}
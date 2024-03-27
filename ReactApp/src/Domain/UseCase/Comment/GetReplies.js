import { getReplyForComment } from "../../../Data/Repository/comment_repository"

export const GetReplies = () => {
    return {
        async execute(comment) {
            const { data, error } = await getReplyForComment(comment);
            return { data, error };
        }
    }
}
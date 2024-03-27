import { getCommentForPost } from "../../../Data/Repository/comment_repository";

const GetComments = () => {
    return {
        async execute(post) {
            const { data, error } = await getCommentForPost(post);
            return { data, error };
        }
    }
}

export default GetComments;
import { create } from "../../../Data/Repository/post_repository";

export const Create = () => {
    return {
        async execute(file, username, description) {
            var param = new FormData();
            param.append('file', file);
            param.append('username', username);
            param.append('description', description);
            const { data, error } = await create(param);
            return { data, error };
        }
    }
}
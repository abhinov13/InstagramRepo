import { checkUsername } from "../../../Data/Repository/user_repository";

const ValidateUsername = () => {
    return {
        async execute(username) {
            const { data, error } = await checkUsername(username);
            return { data, error };
        }
    }
};

export default ValidateUsername;
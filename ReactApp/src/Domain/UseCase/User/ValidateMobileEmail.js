import { validateUniqueCredential } from "../../../Data/Repository/user_repository";

const ValidateMobileOrUsername = () => {
    return {
        async execute(params) {
            const { data, error } = await validateUniqueCredential(params);
            return { data, error };
        }
    }
};

export default ValidateMobileOrUsername;
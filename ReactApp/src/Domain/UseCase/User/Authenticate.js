import { authenticateUser } from "../../../Data/Repository/user_repository";

const Authenticate = () => {
    return {
        async execute(user) {
            const { data, error } = await authenticateUser(user);
            return { data, error };
        }
    }
};

export default Authenticate;
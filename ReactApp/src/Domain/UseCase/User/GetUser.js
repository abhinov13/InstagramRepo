
import { findUser } from "../../../Data/Repository/user_repository";

const GetUser = () => {
    return {
        async execute(username) {
            const { data, error } = await findUser(username);
            return { data, error };
        }
    }
};

export default GetUser;
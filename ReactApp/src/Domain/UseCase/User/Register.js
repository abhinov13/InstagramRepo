import { registerUser } from "../../../Data/Repository/user_repository";

const Register = () => {
    return {
        async execute(user) {
            const { data, error } = await registerUser(user);
            return { data, error };
        }
    }
};

export default Register;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Authenticate from "../../../../Domain/UseCase/User/Authenticate";
import { useUser } from "../../../Context/UserContext/UserContext";

export const LoginViewModel = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const usernameSetter = useUser();

    const attemptLogin = (e) => {
        e.preventDefault();
        Authenticate()
        .execute({username, password})
        .then(({data}) => {
            if(data)
            {
                usernameSetter.setUsername(username);
                localStorage.setItem("username", username);
                navigate('/home');
            }
            else{
                alert('Wrong Username or Password');
            }
        });
        
    }



    return {
        setUsername,
        setPassword,
        attemptLogin
    }
}
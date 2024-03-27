import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ValidateUsername from "../../../../Domain/UseCase/User/ValidateUsername";
import ValidateMobileEmail from "../../../../Domain/UseCase/User/ValidateMobileEmail";
import Register from "../../../../Domain/UseCase/User/Register";
import { useUser } from "../../../Context/UserContext/UserContext";

export const SignupViewModel = () => {

    const navigate = useNavigate();

    const errorFieldStyle = useRef({ backgroundImage: "url('incorrectInput.svg')", backgroundSize: "10% 50%", backgroundRepeat: "no-repeat", backgroundPosition: "right center" });
    const validStyle = null;
    const mobileRegex = useRef(/^(\+\d{1,3}[- ]?)?\d{10}$/);
    const emailRegex = useRef(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/);
    const usernameRegex = useRef(/^[a-zA-Z_0-9]+$/);
    const fullNameRegex = useRef(/^[a-zA-Z ]+$/);

    const [mobileOrEmail, setMobileOrEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [validMobileOrEmail, setValidMobileOrEmail] = useState(null);
    const [validUsername, setValidUsername] = useState(null);
    const [validFullName, setValidFullName] = useState(null);

    const usernameSetter = useUser();

    useEffect(
        () => {
            if (username === "") {
                setValidUsername(validStyle);
            }
            else if (usernameRegex.current.test(username)) {
                ValidateUsername()
                    .execute(username)
                    .then(({ data }) => {
                        if (data === "Valid User") {
                            setValidUsername(validStyle);
                        }
                        else {
                            setValidUsername(errorFieldStyle.current);
                        }
                    });
            }
            else {
                setValidUsername(errorFieldStyle.current);
            }
        }, [username]
    );

    useEffect(
        () => {
            if (fullName.length === 0) {
                setValidFullName(validStyle);
            }
            else if (fullNameRegex.current.test(fullName)) {
                setValidFullName(validStyle);
            }
            else {
                setValidFullName(errorFieldStyle.current);
            }
        }, [fullName]
    );

    useEffect(
        () => {

            if (mobileOrEmail.length === 0) {
                setValidMobileOrEmail(validStyle);
            }
            else if (mobileRegex.current.test(mobileOrEmail) || emailRegex.current.test(mobileOrEmail)) {
                ValidateMobileEmail()
                    .execute(mobileOrEmail)
                    .then(({ data }) => {
                        console.log(data);
                        if (data) {
                            setValidMobileOrEmail(validStyle);
                        }
                        else {
                            setValidMobileOrEmail(errorFieldStyle.current);
                        }
                    });
            }
            else {
                setValidMobileOrEmail(errorFieldStyle.current);
            }
        }, [mobileOrEmail]
    );


    const registerUser = (e) => {
        e.preventDefault();
        let errorMessage = "";
        if (password.length < 8) {
            if (errorMessage !== "") errorMessage = errorMessage + "\n";
            errorMessage = errorMessage + "Password length must be greater than or equal to 8.";
        }
        if (validFullName != null) {
            if (errorMessage !== "") errorMessage = errorMessage + "\n";
            errorMessage = errorMessage + "Full Name should only consist of characters and spaces.";
        }
        if (validUsername != null) {
            if (errorMessage !== "") errorMessage = errorMessage + "\n";
            if (usernameRegex.current.test(username))
                errorMessage = errorMessage + "Username is already taken. Please enter other username.";
            else
                errorMessage = errorMessage + "Username should only contain characters, number and _.";
        }
        if (validMobileOrEmail != null) {
            if (errorMessage !== "") errorMessage = errorMessage + "\n";
            errorMessage = errorMessage + "Username or Mobile number is already linked to existing account.";
        }

        if (errorMessage !== "") {
            alert(errorMessage);
        }

        if (errorMessage === "") {
            const user = { password: password, name: fullName, username: username };
            if (mobileRegex.current.test(mobileOrEmail)) {
                user.mobile = mobileOrEmail;
            }
            else {
                user.email = mobileOrEmail;
            }
            Register()
                .execute(user)
                .then(({data}) => {
                    if(data.username != null)
                    usernameSetter.setUsername(username);
                    localStorage.setItem("username", username);
                    navigate("/home");
                })
                .catch((error) => {
                    errorMessage = "Unable to create user with given information. Please try entering different data. " + error.message;
                    alert(errorMessage);
                });
        }
    }

    return {
        setMobileOrEmail,
        setFullName,
        setUsername,
        setPassword,
        validFullName,
        validUsername,
        validMobileOrEmail,
        registerUser
    }
}
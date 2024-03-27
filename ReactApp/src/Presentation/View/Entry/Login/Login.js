import GetApp from "../Component/GetApp";
import { Link } from "react-router-dom";
import { LoginViewModel } from "./LoginViewModel";

const Login = (props) => {

    const { setUsername, setPassword, attemptLogin } = LoginViewModel();

    return (
        <>
            <div className="login_form">
                <img src="/instaTextLogo.svg" className="login_logo centre_horizontally" alt="Instagram Logo" />
                <form onSubmit={(e) => props.login(e)} style={{ width: "75%", position: "relative" }} className="centre_horizontally">
                    <div className="login_input">
                        <input type="text" className="text_input" placeholder="Phone number, username or email" onChange={(e) => { setUsername(e.target.value) }} required />
                        <input type="password" className="text_input" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} required /><br />
                        <input type="submit" className="submit_button" value="Log in" onClick={(e) => {attemptLogin(e)}} />
                    </div>
                </form>
                <div className="centre_horizontally" style={{ marginTop: "5%", height: "5%", width: "75%", position: "relative" }}>
                    <div style={{ backgroundColor: "gray", height: "5%", width: "100%", position: "absolute" }} className="centre_vertically" />
                    <div className="centre_horizontally" style={{ position: "absolute", width: "30%", backgroundColor: "#FFFFFF", textAlign: "center" }}>OR</div>
                </div>
                <div style={{ position: "relative", marginTop: "6%", textAlign: "center" }}>
                    <Link to={"/ForgotPassword"}>Forgot Password?</Link>
                </div>
            </div>
            <div className="signup_option">
                Don't have an account? <Link to={"/Signup"}>Sign up</Link>
            </div>
            <GetApp />
        </>
    )
};

export default Login;
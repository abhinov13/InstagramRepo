import { Link } from "react-router-dom";
import GetApp from "../Component/GetApp";
import { SignupViewModel } from "./SignupViewModel";

const Signup = (props) => {
    const { setMobileOrEmail,
        setFullName,
        setUsername,
        setPassword,
        validFullName,
        validUsername,
        validMobileOrEmail,
        registerUser
    } = SignupViewModel();

    return (
        <>
            <div className="login_form" style={{ height: "73%" }}>
                <img src="/instaTextLogo.svg" className="login_logo centre_horizontally" alt="Instagram Logo" />
                <form onSubmit={(e) => props.login(e)} style={{ width: "75%", position: "relative" }} className="centre_horizontally">
                    <div className="login_input">
                        <input type="text" className="text_input" placeholder="Mobile Number or Email" onChange={(event) => { setMobileOrEmail(event.target.value) }} style={validMobileOrEmail} required />
                        <input type="text" className="text_input" placeholder="Full Name" onChange={(event) => { setFullName(event.target.value) }} style={validFullName} required /><br />
                        <input type="text" className="text_input" placeholder="Username" onChange={(event) => { setUsername(event.target.value) }} style={validUsername} required /><br />
                        <input type="password" className="text_input" placeholder="Password" onChange={(event) => { setPassword(event.target.value) }} required /><br />
                        <input type="submit" className="submit_button" value="Sign Up" onClick={registerUser} />
                    </div>
                </form>

                <div className="centre_horizontally" style={{ position: "relative", marginTop: "3%", textAlign: "center", color: "gray", fontSize: "0.7rem", width: "75%" }}>
                    People who use our service may have uploaded your contact information to Instagram.
                </div>
            </div>
            <div className="signup_option">
                Have an account? <Link to="/">Log in</Link>
            </div>
            <GetApp />
        </>
    )
}

export default Signup;
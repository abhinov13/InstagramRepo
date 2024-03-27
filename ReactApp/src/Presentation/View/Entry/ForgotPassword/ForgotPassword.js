import { Link } from "react-router-dom";
import GetApp from "../Component/GetApp";

const ForgotPassword = (props) => {
    return (
        <>
            <div className="login_form" style={{ height: "87%" }}>
                <img src="/lock.svg" className="forgot_logo centre_horizontally" alt="Lock Logo" /><br />
                <div className="centre_horizontally" style={{ width: "75%", position: "relative", textAlign: "center", top: "5%" }}>
                    Trouble logging in?<br />
                </div>
                <form onSubmit={(e) => props.login(e)} style={{ width: "75%", position: "relative" }} className="centre_horizontally">
                    <div className="login_input">
                        <input type="text" className="text_input" placeholder="Mobile Number or Email" />
                        <input type="submit" className="submit_button" value="Sign Up" />
                    </div>
                </form>

                <div className="centre_horizontally" style={{ marginTop: "5%", height: "5%", width: "75%", position: "relative" }}>
                    <div style={{ backgroundColor: "gray", height: "5%", width: "100%", position: "absolute" }} className="centre_vertically" />
                    <div className="centre_horizontally" style={{ position: "absolute", width: "30%", backgroundColor: "#FFFFFF", textAlign: "center" }}>OR</div>
                </div>

                <div className="centre_horizontally" style={{ position: "relative", textAlign: "center", top: "5%" }}>
                    <Link to="/Signup">Create an account</Link>
                </div><br />

                <Link to="/"><button style={{ position: "absolute", width: "100%", height: "10%", bottom: "0", backgroundColor: "#FAFAFA", border: "1px solid black" }}>Back to login</button></Link>
            </div>
            <GetApp />
        </>
    );
};

export default ForgotPassword;
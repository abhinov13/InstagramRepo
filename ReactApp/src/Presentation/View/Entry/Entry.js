
import { Route, Routes, Navigate } from "react-router-dom";
import Signup from "./Signup/Signup";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import Login from "./Login/Login";

const Entry = (props) => {
    return (
        <div className="login_page_wrapper">
            <div className="login_page centre_vertically">
                <div className="centre_horizontally" style={{ width: "60%", position: "relative", height: "100%" }}>
                    <div className="login_left">
                        <img src="/loginLeft.png" alt="Instagram Mobile Demo" style={{ height: "100%", width: "100%" }} />
                    </div>
                    <div className="login_right">
                        <Routes>
                            <Route path='/' Component={Login} />
                            <Route path='/Signup' Component={Signup} />
                            <Route path='/ForgotPassword' Component={ForgotPassword} />
                            <Route path='/*' element={<Navigate to='/NotFound' />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Entry;
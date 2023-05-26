import { Link } from "react-router-dom"
import "./register.css"

export default function Register () {
    return (
       
        <div className="register">
            <span className="registertitle">register</span>
           <form className="registerform">
            <label>Username</label>
            <input type="text" className="registerinput" placeholder="Enter Your Username..." />
            <label>Phone Number</label>
            <input type="text" className="registerinput" placeholder="Enter Your Phonenumber..." />
            <label>Email</label>
            <input type="text" className="registerinput" placeholder="Enter Your Email..." />
            <label>Password</label>
            <input type="password" className="registerinput" placeholder="Enter Your Password..." />
            <button className="registerregisterbutton">
            <Link className="link" to="/login">Register</Link>
            </button>
           </form>
            <button className="registerloginbutton">
            <Link className="link" to="/login">Login</Link>
            </button>
        </div>
       
    )
}
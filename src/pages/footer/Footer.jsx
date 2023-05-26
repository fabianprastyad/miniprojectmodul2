import React from "react";
import "./footer.css"
import { Link } from "react-router-dom";

export default function Footer () {
    return (
        <div className="footer">
            <div>
            <ul className="socialmedia">
                <li><Link></Link><img className="facebook" src="https://cdn-icons-png.flaticon.com/512/4701/4701482.png"/></li>
                <li><img className="email" src="https://cdn-icons-png.flaticon.com/512/3178/3178158.png"/></li>
                <li><img className="instagram" src="https://cdn.freebiesupply.com/images/large/2x/instagram-icon-white-on-black.png"/></li>
                <li><img className="twitter" src="https://seeklogo.com/images/T/twitter-icon-circle-black-logo-35827D553B-seeklogo.com.png"/></li>
            </ul>

            </div>     
        </div>
    
    )
}
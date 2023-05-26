import Sidebar from "../../components/sidebar/Sidebar"
import withAuth from "../../components/withAuth"
import "./settings.css"

function Settings () {
    return (
        <div className="settings">
           <div className="settingswrapper">
            <div className="settingstitle">
                <span className="settingsupdatetitle">Update Your Account</span>
                <span className="settingsdeletetitle">Delete Account</span>
            </div>
            <form className="settingsform">
                <label>Profil Picture</label>
                <div className="settingspp">
                    <img src="https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=908&q=80"
                    />
                    <label htmlFor="fileinput">
                    <span class="settingsicon material-symbols-outlined">account_circle</span>
                    </label>
                    <input type="file" id="fileinput"  style={{display: "none"}}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder="Username" />
                <label>Phone Number</label>
                <input type="text" placeholder="Phone Number" />
                <label>Email</label>
                <input type="email" placeholder="Email" />
                <label>Password</label>
                <input type="password" />
                <button className="settingssubmit">Update</button>
            </form>
           </div>
           <Sidebar/>
        </div>
    )
}

export default Settings
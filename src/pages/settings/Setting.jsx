import { AccountCircle } from "@mui/icons-material";
import Sidebar from "../../component/sidebar/Sidebar";
import "./setting.css";

const Setting = () => {
  return (
    <div className="setting">
      <div className="settingWrapper">
        <div className="settingTitle">
          <span className="settingUpdateTitle">Update Your Account</span>
          <span className="settingDeleteTitle">Delete Account</span>
        </div>
        <form className="settingForm">
          <label>Profile Picture</label>
          <div className="settingPP">
            <img
              src="https://images.pexels.com/users/avatars/44735047/vinay-sehwag-329.jpeg?auto=compress&fit=crop&h=256&w=256"
              alt="Profile"
            />
            <label htmlFor="fileInput">
              <AccountCircle className="settingPPIcon" />
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Name" />
          <label>Email</label>
          <input type="email" placeholder="jahduwala" />
          <label>Password</label>
          <input type="password" />
          <button className="settingSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Setting;

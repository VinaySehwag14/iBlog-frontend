import {
  Facebook,
  Instagram,
  Pinterest,
  Search,
  Twitter,
} from "@mui/icons-material";
import { Outlet, Link } from "react-router-dom";
import "./topbar.css";

const TopBar = () => {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <Facebook className="topIcon" />
        <Instagram className="topIcon" />
        <Pinterest className="topIcon" />
        <Twitter className="topIcon" />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <ul className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </ul>
          {/* <ul className="topListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </ul> */}
          {/* <ul className="topListItem">
            <Link className="link" to="/about">
              CONTACT
            </Link>
          </ul> */}
          <ul className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </ul>
          <ul className="topListItem">{user && "LOGOUT"}</ul>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImage"
            src="https://images.pexels.com/users/avatars/44735047/vinay-sehwag-329.jpeg?auto=compress&fit=crop&h=256&w=256"
            alt="Ownerimage"
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <Search className="searchIcon" />
      </div>
      <Outlet />
    </div>
  );
};

export default TopBar;

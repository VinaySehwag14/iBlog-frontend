import {
  Facebook,
  Instagram,
  Pinterest,
  Search,
  Twitter,
} from "@mui/icons-material";
import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

const TopBar = () => {
  const { user, dispatch } = useContext(Context);
  const PF = "https://ibloog.herokuapp.com/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <a
          href="https://www.facebook.com/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <Facebook className="topIcon" />
        </a>
        <a
          href="https://www.instagram.com/travel/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <Instagram className="topIcon" />
        </a>
        <a
          href="https://in.pinterest.com/pin/672162313142402241/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <Pinterest className="topIcon" />
        </a>
        <a
          href="https://twitter.com/VinaySehwag14"
          rel="noreferrer noopener"
          target="_blank"
        >
          <Twitter className="topIcon" />
        </a>
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
          <ul className="topListItem link" onClick={handleLogout}>
            {user && "LOGOUT"}
          </ul>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img
              className="topImage"
              src={PF + user.profilePic}
              alt="Authorimage"
            />
          </Link>
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

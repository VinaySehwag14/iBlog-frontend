import { Facebook, Instagram, Pinterest, Twitter } from "@mui/icons-material";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt="about me"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque soluta
          accusamus a eum, quibusdam suscipit
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Travel</li>
          <li className="sidebarListItem">Sex</li>
          <li className="sidebarListItem">Coding</li>
          <li className="sidebarListItem">Cinema</li>
          <li className="sidebarListItem">Texh</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <Facebook className="sidebarIcon" />
          <Instagram className="sidebarIcon" />
          <Pinterest className="sidebarIcon" />
          <Twitter className="sidebarIcon" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

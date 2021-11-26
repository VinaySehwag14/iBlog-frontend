import { Facebook, Instagram, Pinterest, Twitter } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";
import "./sidebar.css";
import { API } from "../../backend";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get(`${API}/categories`);
      setCats(res.data);
    };
    getCats();
  }, []);
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
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
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

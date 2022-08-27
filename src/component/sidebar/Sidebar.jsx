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
          src="https://images.pexels.com/photos/13394510/pexels-photo-13394510.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="about me"
        />
        <p>
          I am a fullstack web developer (MERN) stack , I enjoy solvind day to
          day problems and also desiging those problems solutions.
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

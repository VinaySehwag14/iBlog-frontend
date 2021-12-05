import { Delete, Edit } from "@mui/icons-material";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import "./singlePost.css";
import { API } from "../../backend";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

const SinglePost = () => {
  const [post, setPost] = useState({});
  const location = useLocation();
  //*location value
  // console.log("locationVal", location.pathname.split("/")[2]);
  const path = location.pathname.split("/")[2];
  const PF = "http://localhost:5050/images/";

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`${API}/post/` + path);
      console.log(res);
      setPost(res.data);
    };
    console.log("getPOST", getPost);
    getPost();
  }, [path]);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={PF + post.photo} alt="blog pic" className="singlePostImg" />
        )}

        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <Edit className="singlePostIcon " style={{ fontSize: "20px" }} />
            <Delete className="singlePostIcon" style={{ fontSize: "20px" }} />
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="singlePostDesc">{post.desc}</p>
      </div>
    </div>
  );
};

export default SinglePost;

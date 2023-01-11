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
  const PF = "https://iblog-backend.onrender.com/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`${API}/post/` + path);
      console.log(res);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    console.log("getPOST", getPost);
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`${API}/post/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`${API}/post/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={PF + post.photo} alt="blog pic" className="singlePostImg" />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <Edit
                  className="singlePostIcon "
                  style={{ fontSize: "20px" }}
                  onClick={() => {
                    setUpdateMode(true);
                  }}
                />
                <Delete
                  className="singlePostIcon"
                  style={{ fontSize: "20px" }}
                  onClick={handleDelete}
                />
              </div>
            )}
          </h1>
        )}
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
        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
};

export default SinglePost;

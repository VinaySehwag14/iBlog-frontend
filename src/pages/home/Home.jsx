import Posts from "../../component/posts/Posts";
import Sidebar from "../../component/sidebar/Sidebar";
import Header from "../../component/header/Header";
import "./home.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../../backend";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`${API}/post`);
      //*comment for checking post
      console.log(res);
      setPosts(res.data);
    };
    fetchPosts();
  }, []);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;

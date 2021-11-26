import Posts from "../../component/posts/Posts";
import Sidebar from "../../component/sidebar/Sidebar";
import Header from "../../component/header/Header";
import "./home.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../../backend";
import { useLocation } from "react-router";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  console.log(search);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`${API}/post` + search);
      //*comment for checking post
      setPosts(res.data);
      console.log(res.data);
    };
    fetchPosts();
  }, [search]);
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

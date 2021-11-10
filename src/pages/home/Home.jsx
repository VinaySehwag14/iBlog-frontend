import Posts from "../../component/posts/Posts";
import Sidebar from "../../component/sidebar/Sidebar";
import Header from "../../component/header/Header";
import "./home.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;

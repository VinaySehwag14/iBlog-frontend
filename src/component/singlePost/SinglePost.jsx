import { Delete, Edit } from "@mui/icons-material";
import "./singlePost.css";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/9190648/pexels-photo-9190648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="blog pic"
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum taikwando jai ho.
          <div className="singlePostEdit">
            <Edit className="singlePostIcon " style={{ fontSize: "20px" }} />
            <Delete className="singlePostIcon" style={{ fontSize: "20px" }} />
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Vinay Sehwag</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          minima, eos animi eaque suscipit rerum! Atque, nesciunt? Laboriosam
          nihil eius officiis modi deserunt eligendi velit eveniet, libero
          quisquam! Duc Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Explicabo minima, eos animi eaque suscipit rerum! Atque, nesciunt?
          Laboriosam nihil eius officiis modi deserunt eligendi velit eveniet,
          libero quisquam! Duc Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Explicabo minima, eos animi eaque suscipit rerum!
          Atque, nesciunt? Laboriosam nihil eius officiis modi deserunt eligendi
          velit eveniet, libero quisquam! Duc Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Explicabo minima, eos animi eaque
          suscipit rerum! Atque, nesciunt? Laboriosam nihil eius officiis modi
          deserunt eligendi velit eveniet, libero quisquam! Duc Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Explicabo minima, eos
          animi eaque suscipit rerum! Atque, nesciunt? Laboriosam nihil eius
          officiis modi deserunt eligendi velit eveniet, libero quisquam! Duc
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          minima, eos animi eaque suscipit rerum! Atque, nesciunt? Laboriosam
          nihil eius officiis modi deserunt eligendi velit eveniet, libero
          quisquam! Duc Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Explicabo minima, eos animi eaque suscipit rerum! Atque, nesciunt?
          Laboriosam nihil eius officiis modi deserunt eligendi velit eveniet,
          libero quisquam! Duc Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Explicabo minima, eos animi eaque suscipit rerum!
          Atque, nesciunt? Laboriosam nihil eius officiis modi deserunt eligendi
          velit eveniet, libero quisquam! Duc
        </p>
      </div>
    </div>
  );
};

export default SinglePost;

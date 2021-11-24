import "./post.css";

const Post = ({ post }) => {
  return (
    <div className="post">
      {post.photo && (
        <img
          className="postImg"
          src="https://images.pexels.com/photos/9190648/pexels-photo-9190648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
      )}

      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>
        <span className="postTitle">{post.title}</span>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
};

export default Post;

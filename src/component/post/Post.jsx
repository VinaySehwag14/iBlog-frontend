import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/9190648/pexels-photo-9190648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet sds ciunt .
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
        ullam neque voluptates voluptate dolorem debitis, laboriosam quibusdam
        ea, temporibus quam dolor quos nostrum, dicta vero? Ipsam aliquid Lorem
        ipsum dolor sit amet consectetur, adipisicing elit. Laudantium ullam
        neque voluptates voluptate dolorem debitis, laboriosam quibusdam ea,
        temporibus quam dolor quos nostrum, dicta vero? Ipsam aliquid Lorem
        ipsum dolor sit amet consectetur, adipisicing elit. Laudantium ullam
        neque voluptates voluptate dolorem debitis, laboriosam quibusdam ea,
        temporibus quam dolor quos nostrum, dicta vero? Ipsam aliquid Lorem
        ipsum dolor sit amet consectetur, adipisicing elit. Laudantium ullam
        neque voluptates voluptate dolorem debitis, laboriosam quibusdam ea,
        temporibus quam dolor quos nostrum, dicta vero? Ipsam aliquid Lorem
        ipsum dolor sit amet consectetur, adipisicing elit. Laudantium ullam
        neque voluptates voluptate dolorem debitis, laboriosam quibusdam ea,
        temporibus quam dolor quos nostrum, dicta vero? Ipsam aliquid mollitia
        ad at.
      </p>
    </div>
  );
};

export default Post;

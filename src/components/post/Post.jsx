const Post = (props) => {
  return (
    <div className="post">
      <div className="postHeader">
        <h1>{props.id}</h1>
        <h2>{props.title}</h2>
      </div>
      <div className="postBody">{props.body}</div>
    </div>
  );
};

export default Post;

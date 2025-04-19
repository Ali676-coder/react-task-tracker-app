import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const BlogDetails = () => {
  const { id } = useParams();

  const history = useHistory();
  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  const {
    data: blog, //اسم مستعار فقط للسهولة
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);
  return (
    <div className="blog-details">
      {error && <h2>{error}</h2>}
      {isPending && <h2 style={{ fontSize: "40px" }}>loading...</h2>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written By : {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete Blog</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;

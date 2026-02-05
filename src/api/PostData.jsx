import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const PostData = () => {
  const [posts, setPosts] = useState([]);
  //console.log(posts);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <>
      <div>
        <div className="post-container">
          {posts.map((post) => (
            <NavLink key={post.id}
              className="post-title"
              style={{ display: "block" }}
              to={`/post/${post.id}`}
            >
              {post.title}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default PostData;

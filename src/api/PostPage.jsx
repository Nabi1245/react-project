import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const PostPage = () => {
  const [data, setData] = useState(null);
  const params = useParams();
  // console.log("Params", params);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    .then(data => data.json())
    .then(data => setData(data))
  }, [])
  //console.log("Data",data);

  if(data === null) return <p>Loading.....</p>
  return (
    <div>
        <h1>Post will appear here {params.postId}</h1>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
    </div>
  )
}

export default PostPage;
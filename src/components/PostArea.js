import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NormalPost from './NormalPost';

const PostArea = () => {
  const [data,setData] = useState([]);
  
  useEffect(() => {
      axios.get("http://127.0.0.1:8000/info/feed/sdslabs")
      .then((response) => {
        console.log(response.data)
        setData(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  },[])
    
  return (
    <div className="w-5/6 bg-slate-300  mx-40 rounded-t-lg overflow-y-scroll">
      {
        data.map((post, index) => (
          <NormalPost image={post.image} user={post.user} caption={post.caption} />
        ))
      }
      <NormalPost />
    </div>
  )
}

export default PostArea;

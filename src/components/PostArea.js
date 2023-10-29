import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NormalPost from './NormalPost';

const PostArea = () => {
const [data,setData] = useState([]);
  useEffect(()=>{
(async()=>{
  const res = await axios.get("http://127.0.0.1:8000/info/feed/sdslabs");
  console.log(res.data)
  setData(res.data);
})()
  },[])
    
      
  return (
    <div className="w-5/6 bg-slate-300  mx-40 rounded-t-lg overflow-y-scroll">
    {data.map((post,index)=>(
      <NormalPost image={post.image} usr={post.usr} caption={post.caption} />
    ))}
    <NormalPost/>
    </div>
  )
}

export default PostArea;

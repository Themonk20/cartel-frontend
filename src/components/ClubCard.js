import React from 'react'

const ClubCard = ({image,username}) => {

    // const handleClick = ()=>{
    //     const posts = axios.get(`http://localhost:5000/api/feed/${username}`)

    
  return (

    
    <div className="w-28 m-6 rounded-2xl" >
      <img className="rounded-full h-20 w-20 border [border-color:#db2777]"src={image}/>
      <h1 className="font-semibold text-white mx-2"> {username}</h1>
    </div>
  )
}

export default ClubCard

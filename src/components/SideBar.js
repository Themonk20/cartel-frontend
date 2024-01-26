import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ClubCard from "./ClubCard"
import axios from "axios"

const SideBar = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
      axios
      .get("http://127.0.0.1:8000/info/feed/check")
      .then((response) => {
        console.log(response.data)
        setData(response.data);
      })
      .catch((error) => {
        console.error(error)
      })
  },[])

  const isMenuOpen = useSelector(store=>store.toggle.isMenuOpen)
  if(!isMenuOpen) return null;

  return (
    <div className=" w-32 h-screen [background-color:#6366f1] rounded-r-2xl flex flex-col p-1">
      {data.map((club,index)=>(
        <ClubCard image={club.image} key={index} username={club.username}/>
      ))}
    </div>
  )
}

export default SideBar;

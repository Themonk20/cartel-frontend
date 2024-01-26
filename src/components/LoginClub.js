import React, { useState } from 'react'
import HeaderCurve from './HeaderCurve'
import axios from 'axios'

const LoginClub = () => {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  const handleSignupClick = () => {
    axios
    .post('http://127.0.0.1:8000/club/login', {
      username,
      password
    })
    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      console.error(error)
    })
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <HeaderCurve/>
      <div className="flex flex-col justify-evenly items-center border border-gray-300 p-4 mt-20 rounded-lg">
        <h1 className="font-body text-3xl [color:#818cf8] mt-5 mb-10">Login As A Club</h1>
        <div className="flex flex-col items-center mb-8">
          <input 
            placeholder="Username" 
            value={username} 
            className="w-80 h-15 rounded-2xl border p-4 font-body"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-center mb-10">
          <input 
            placeholder="Passsword" 
            value={password} 
            className="w-80 h-15 rounded-2xl border p-4 font-body"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-center">
          <button className="[background-color:#fb7185] w-40 h-12 rounded-xl text-center text-lg font-bold" onClick={handleSignupClick}><span className="text-2xl [color:#ffffff]">Login</span></button>
        </div>
      </div>
    </div>
  )
}

export default LoginClub

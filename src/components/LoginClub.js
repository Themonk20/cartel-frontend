import React from 'react'
import HeaderCurve from './HeaderCurve'

const LoginClub = () => {
  return (
    <div>
      <HeaderCurve/>
      
      <div className="flex gap-6 flex-col text-center">
        <h1 className="font-body text-3xl [color:#818cf8]">Login As A Club</h1>
      <div className="flex flex-col items-center">
        
        <input placeholder="Username" className="w-1/5 h-12 rounded-2xl border p-4 font-body"></input>
      </div>
      <div className="flex flex-col items-center">
      
        <input className="w-1/5 h-12 rounded-2xl border p-4 font-body" placeholder='Password'></input>
      </div>
      <div className="flex flex-col items-center">
    <button className="[background-color:#fb7185] w-1/5 h-8 rounded-xl text-center text-lg font-bold ">Login</button>
    </div>
    </div>
    </div>
  

  )
}

export default LoginClub

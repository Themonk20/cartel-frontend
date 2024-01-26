import React from 'react'

const NormalPost = ({usr,image,caption}) => {
  return (
    <div className="w-11/12 m-auto my-10 h-60 bg-slate-200 rounded-2xl shadow-lg flex">
      <img src={image} className="w-1/4 m-8 rounded-2xl shadow-xl h-70"></img>
      <h1>
        
      </h1>
      <div className="w-1/3 m-8 font-medium font-body text-slate-600 text-sm">
        <h1 className="font-bold font-body text-slate-700 text-3xl">Syntax Error 2023 </h1>
        {caption}
      </div>
      <div className="flex flex-col justify-between">
        <button className="w-60 h-12 rounded-full [background-color:#4ade80] my-10 flex font-bold items-center justify-center">Register</button>
        <button className="w-60 h-12 rounded-full bg-slate-300 mb-5 font-bold items-center">Save</button>
      </div>
    </div>
  )
}

export default NormalPost

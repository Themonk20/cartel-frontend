import React from 'react'

const Header = () => {
  return (
    <div className="[background-color:#7F5AF0] h-24 flex justify-between shadow-2xl">
    <div className="flex gap-1">
    <img className="h-10 m-7 mx-8 shadow-2xl" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAvElEQVR4nO3asQnEMAAEQfdftPZjg8OHM3gG1MCtMum6AAAAAACAf6uTc16zgSDtIwjSfnhB2o8tSPuBBWk/qiDthxSk/XiCtB9MkD4WBAAAAAAAAAB4tn7Ud879k4NBzqsuhSDtIwjSfnhB2o8tSPuBBWk/qiDthxSk/XiC9IEgAAAAAAAAAMCz9aO+c+6fHAxyXnUpBGkfQZD2wwvSfmxB2g8sSPtRBWk/pCDtxxOkDwQBAAAAAACuP/sBanOoG/LdKW4AAAAASUVORK5CYII="></img>
    <h1 className="text-white text-4xl mx-auto my-4">Cartel</h1>
    </div>
    <div>
        <input type="text" placeholder='search posts'></input>
        <button>search</button>
    </div>
    <div className="flex gap-3">
        <h1 className="text-white text-lg my-8 cursor-pointer">Registrations</h1>
        <h1 className="text-white text-lg my-8 cursor-pointer">Extras</h1>
        <img  className="h-20 w-20 my-2 cursor-pointer" src="data:image/png;base64,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"></img>
    </div>
      
    </div>
  )
}

export default Header

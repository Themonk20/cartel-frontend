import React from 'react'

const HeaderCurve = () => {
  return (
    <div className=" rounded-3xl my-10 mx-auto w-10/12 h-16 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500 shadow-xl flex justify-between sticky">
      <img 
        className="h-8 w-32 m-3" 
        src="logo.png" 
        onClick={() => window.location.href = "/"}
        style={{
          cursor: 'pointer',
        }}
      />
    </div>
  )
}

export default HeaderCurve;

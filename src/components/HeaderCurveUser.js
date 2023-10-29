import React from 'react'

const HeaderCurveUser = () => {
  return (
       
    <div className=" rounded-3xl my-10 mx-auto w-10/12 h-16 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500 shadow-xl flex justify-between sticky">
        <div>
       <img className="h-8 w-32 m-3" src="logo.png"/>
        </div>
        <div className="flex m-5 gap-6">
            
            <h1 className="font-medium text-base text-white">Registrations</h1>
            <h1 className="font-medium text-base text-white">Activities</h1>
        </div>
    </div>
  )
}

export default HeaderCurveUser;

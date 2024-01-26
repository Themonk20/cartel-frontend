import React from 'react'
import SideBar from './SideBar'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import SignIn from './SignIn'
import UserHome from './UserHome'
import ClubHome from './ClubHome'
import LoginClub from './LoginClub'

const Body = () => {
  const appRouter = createBrowserRouter([
    {
    path:"/",
    element: <SignIn/>
    },
    {
      path:"/home",
      element:<UserHome/>,
    },
    {
      path:"/club",
      element:<ClubHome/>,
    },
    {
      path:"/club-login",
      element:<LoginClub/>
    }
  ])

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body

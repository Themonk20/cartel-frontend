import React, { useEffect } from 'react'
import HeaderCurveUser from './HeaderCurveUser'
import SideBar from './SideBar'
import PostArea from './PostArea'
import { useDispatch} from 'react-redux'
import {toggleMenu} from '../utils/toggleSlice'
import { useSelector } from 'react-redux'
import store from "../utils/store"

const UserHome = () => {
   
    const dispatch = useDispatch();
    const handleToggleMenu = () =>{
      dispatch(toggleMenu());
    }
    const isMenuOpen = useSelector(state=>state.toggle.isMenuOpen);
   
  return (
    <div>
      <div className="absolute mx-12 my-2"><img className="cursor-pointer" onClick={()=>handleToggleMenu()} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABWklEQVR4nO3W3ytDcRzG8V3thlAoKWklJSUpKSlJSUlJlvbTZo7NOA6bs+Pu3Nn8GbSWJokkkkQSSbKWSBKdnYa2f+FRyuWROyee11/wfL71rbfFQkRE9FeoKqxRpbgciRV0SXmHGHtFWM4jJOsQFjQEoi/wR57hjTzBPf8Ix9wDRqV7jEh3GJ69xZCYxaCYwcDMDfqnr9EXvkJv+BI9UxfoDp2jK3SGzuApOiZP0C4co004QuvEIVoCB2gO7KNpfA+N/l00+HZg822jfmwLdd5N1Ho2UONZz1W50gmLPW01PGBhsZiIKAWYcDyq3WlUutZQ7kzFDQ8w6cvja3yFK4UyR1I3PEBS3nKmHu9MotSxqhkeIMr5uMnHo8SxsmR4gF3NWoOyHheiWs6E47XP8d99YiKi36WyhTJsIRtbSGYLgS1ERP+UyhbKsIVsbCGZLQS2EBERkeVnPgB4ehIth3jRAQAAAABJRU5ErkJggg=="/></div>
      <HeaderCurveUser/>
      <div className="flex w-screen h-screen">
      {
        isMenuOpen?<SideBar/>:<div></div>
      }
      {/* <SideBar/> */}

      <PostArea />

      </div>
    
    </div>
  )
}

export default UserHome

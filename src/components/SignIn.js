import React, { useEffect, useState } from 'react'
import HeaderCurve from './HeaderCurve'
import {useTypewriter , Cursor} from 'react-simple-typewriter'
import { useLocation, useNavigate } from 'react-router-dom'

const SignIn = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [authToken, setAuthToken] = useState(localStorage.getItem("authToken"));
  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  const [username, setUsername] = useState(localStorage.getItem("username"));

  const [text] = useTypewriter(
    {
      words: ['Clubs', 'Students', 'Culture'],
      loop: {},
      typeSpeed: 200,
    }
  )

  const handleUserLogin = ()=>{
    window.location.href = 'http://localhost:8000/user/login'
  }

  const handleClubLogin = () => {
    navigate('/club-login')
  }

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const paramsToken = params.get('authToken');
    const paramsId = params.get('userId');
    const paramsUsername = params.get('username');

    if (paramsToken) localStorage.setItem('authToken', paramsToken);
    // console.log('authToken:', authToken);
    // console.log('userId:', userId);
    // console.log('username:', username);

    // setAuthToken(authToken)
    // setUserId(userId)
    // setUsername(username)
    if (paramsToken || authToken) navigate("/home")
  }, [location.search]);

  return (
    <div>
      <HeaderCurve/>
      <div className="flex flex-col justify-center items-center mt-20">
        <h1 className="[color:#e2e8f0] text-6xl top-1/3 left-96 font-body font-medium mb-5">We bring the <span className=" [color:#db2777]">{text}</span><span className="font-white"><Cursor cursorStyle="|"/></span>Together.</h1>
        <p className="[color:#94a3b8] text-lg font-medium bottom-1/2 left-1/3  w-1/3 mx-12 text-center mb-5"> Bringing students and student clubs together, our platform enables seamless event sharing. Follow clubs aligned with your interests for a vibrant campus experience</p>
        <img className="absolute bottom-0 left-1/3 mx-28" src="https://www.freeiconspng.com/uploads/rick-and-morty-icon-png-26.png" width="350" alt="Rick and morty icon png" />
      </div>
      <div className="flex flex-row justify-center items-center bottom-96 left-1/3 mx-28 gap-10">
        <button className=" [background-color:#4f46e5] w-auto h-12 rounded-2xl px-6 shadow-md text-white font-semibold hover:bg-cyan-600" onClick={handleUserLogin}>Channeli Login</button>
        <button className="[background-color:#db2777] w-auto h-12 rounded-2xl px-6 shadow-md text-white font-semibold hover:bg-cyan-600" onClick={handleClubLogin}>Club Login As A Club</button>
      </div>
    </div>
  )
}

export default SignIn;

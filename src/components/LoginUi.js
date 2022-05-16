import React, { useState, useEffect } from 'react';
import './LoginUi.css';
import profile from "./../images/a.png";
import user from "./../images/user.jpg";
import pass from "./../images/pass.png";
import { useNavigate } from 'react-router-dom';
import { login } from "./slice/auth";
import { useDispatch } from "react-redux";

const LoginUi = () => {
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');
  const [loading, setLoading] = useState(false);
  
 // const [state, setState] = useState({ username: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault()
    // navigate('/home')
    console.log('userName:', userName)
    console.log('passWord:', passWord)

    const login_data = {
      username: userName,
      password: passWord
    }

    dispatch(login(login_data))
      .then(() => {
        setLoading(false);
        navigate('/home');
      })
      .catch((err) => {
        // setState({});
        setLoading(true);
      });
  }

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   const login_data = {
  //     user: userName,
  //     pswd: passWord
  //   }
  //   dispatch(login(login_data))
  //     .then(() => {
  //       setLoading(false);
  //       navigate('/home');
  //     })
  //     .catch((err) => {
  //       // setState({});
  //       setLoading(true);
  //     });
  // }, [dispatch]);

  return (
    <>
      <div className="main">
        <div className="sub-main">

          <div>
            <div className="imgs">
              <div className="container-image">
                <img src={profile} alt="profile" className="profile" />
              </div>
            </div>

            <form>
              <h1>LOGIN</h1>
              <div>
                <img src={user} alt="email" className="email" />
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="User name" className="name" />
              </div>

              <div className="second-input">
                <img src={pass} alt="pass" className="email" />
                <input type="password" value={passWord} onChange={(e) => setPassWord(e.target.value)} placeholder="Password" className="name" />
              </div>

              <div className="login-button">
                <button onClick={handleClick}>LOGIN</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  )
}
export default LoginUi
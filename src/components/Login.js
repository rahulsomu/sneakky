import './login.css';
import {  useState,useRef } from 'react';
import { Link } from 'react-router-dom';
import { authActions } from '../actions/index';
import { useDispatch, useSelector } from 'react-redux';


import { successMsgActions } from '../actions/index';
const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  // const enteredUsernameRef = useRef();
  // const enteredPasswordRef = useRef();
  // const {user,setUser}=useContext(Shoe);
  // let username='';
  const isLoggedIn = useSelector(state => state.authentication.isLoggedIn);
  

  const formSubmitHandler = e => {
    e.preventDefault();

    fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB-oVbXIqj1ZSRC928s07FzjSdFG5LlwfI',
      {
        method: 'POST',
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
        headers: {
          'Content-type': 'application/json',
        },
      }
    ).then(response => {
      if (response.ok) {
        setEmail('');
        setPassword('');
        setError('');
        dispatch(authActions.login(email));
        console.log(isLoggedIn);
        localStorage.setItem('isLoggedIn',isLoggedIn);
        dispatch(
          successMsgActions.showSuccessMsg({
            msg: 'Login Successful',
            color: 'blue',
          })
        );
        setTimeout(() => {
          dispatch(successMsgActions.hideSuccessMsg());
        }, 3000);
       
      } else {
        return response.json().then(data => {
          console.log(data);
          setError(data.error.errors[0].message);
        });
      }
    });
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-img">
          <img src="nike.png" alt="" />
        </div>

        <form onSubmit={formSubmitHandler} className="form" method="POST">
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={e => setPassword(e.target.value)}
          />
          <p className="error">{error}</p>

          <button
            type="submit"
            className="submit"
            disabled={password.length < 6}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

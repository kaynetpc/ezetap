/* eslint-disable no-console */
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './Login.css';
// import ReactDOM from "react-dom";
import {useEffect} from 'react';
import {Register} from '../register/register';
import {makeRequest} from '../../services/api/makeRequest';
import {baseURL} from '../../configs/index';
import {Loading} from '../../dependencies/loading/Loading';
import {Button} from '../../dependencies/button/Button';

const Login = () => {
  const navigate = useNavigate();
  const redirect = () => {
    navigate('/dashboard');
  };

  // React States
  const [errorMessages, setErrorMessages]: any = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [register, setRegister] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  // User Login info
  const database = [
    {
      email: 'test@gmail.com',
      password: 'password',
    },
  ];

  const errors = {
    email: 'Email is Incorrect',
    pass: 'Password is Incorrect',
  };


  // eslint-disable-next-line no-unused-vars
  const handleLogin = (payload: {email: string, pass: string}, callback?: () => {}) => {
    const result = makeRequest({url: `${baseURL}/auth/login`, method: 'POST', payload});
    result.then((res) => {
      // loading
      setLoading(!loading);
      callback && callback();
      console.log(res);
    })
        .catch((err) => {
          console.log(err);

          // loading
          setLoading(!loading);
          alert(err.message);
        });
  };

  const handleSubmit = (e: any) => {
    // Prevent page reload
    e.preventDefault();


    // loading
    setLoading(!loading);

    // Find user login info
    const userData = database.find((user) => user.email === email);

    // Compare user info
    if (userData) {
      if (userData.password !== pass) {
        // Invalid password
        setErrorMessages({name: 'pass', message: errors.pass});

        // loading
        setLoading(!loading);
      } else {
        // loading
        setLoading(!loading);
        setIsSubmitted(true);
      }
    } else {
      // Email not Valid
      setErrorMessages({name: 'email', message: errors.email});

      // loading
      setLoading(!loading);
    }
  };


  // Generate JSX code for error message
  const renderErrorMessage = (name: string) =>
    name === errorMessages.name && (
      <div className="text-red-500 text-lg">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderLoginForm = () => (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input__container">
          <label>Username/Email </label>
          <input
            type="text"
            className="h-10 border-b-2 border-gray-300 rounded
             focus:outline-none focus:border-blue-300 mb-2"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {renderErrorMessage('email')}
        </div>
        <div className="input__container">
          <label>Password </label>
          <input
            type="password"
            className="h-10 border-b-2 border-gray-300 rounded
            focus:outline-none focus:border-blue-300"
            name="pass"
            required
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          {renderErrorMessage('pass')}
        </div>
        <div className="flex justify-center">
          <Button
            label='submit'
            onClick={handleSubmit}
          />
        </div>
        <div className="flex float:right">
          <i>don't have an account? <strong className=' cursor-pointer text-red' onClick={() => setRegister(!register)}>Register</strong></i>
        </div>
      </form>
    </div>
  );

  // Handle redirect
  useEffect(() => {
    isSubmitted && redirect();
  }, [isSubmitted]);

  const handleSave = (payload: any) => {
    const confirm: boolean = window.confirm('Submit Now?');
    if (confirm) {
      // loading
      setLoading(!loading);
      const res = makeRequest({url: `${baseURL}/api/reg`, method: 'POST', payload});
      res.then((data) => {
        // loading
        setLoading(false);
        console.log(data);
        alert('Saved');
      })
          .catch((err) => {
            console.log(err);
            alert(`
            err.message \n 

            you can proceed to login using default data
            username: test@gmail.com
            password: password
            `);
            // loading
            setLoading(false);
          });
    }
  };
  return (
    <>
      {
      register?
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        position: 'absolute',
        backgroundColor: '#CBD5E1',
        width: '100%',
      }}>
        <Register onSave={(res) => handleSave(res)} triggerModal={() => setRegister(!register)} status={true} />
      </div>:
      <div className="login flex flex-col items-center
      justify-center font-mono gap-6 h-screen bg-slate-300">
        <div className="login__container bg-white p-8 w-96 h-96">
          <div className="text-2xl mb-6 text-orange-500">Sign In Ezetap</div>
          {renderLoginForm()}
        </div>
      </div>
      }
      {
        loading &&
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        position: 'absolute',
        width: '100%',
      }}>
        <Loading />
      </div>
      }
    </>
  );
};
export default Login;

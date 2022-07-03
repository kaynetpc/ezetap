import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';
import './Login.css';
// import ReactDOM from "react-dom";

function Login() {
  const navigate = useNavigate();
  const redirect = () => {
    navigate.push('/dashboard');
  };

  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      email: 'cody@gmail.com',
      password: 'password',
    },
  ];

  const errors = {
    email: 'Email is Incorrect',
    pass: 'Password is Incorrect',
  };

  const handleSubmit = (e) => {
    // Prevent page reload
    e.preventDefault();

    const {email, pass} = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.email === email.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({name: 'pass', message: errors.pass});
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Email not Valid
      setErrorMessages({name: 'email', message: errors.email});
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="text-red-500 text-lg">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input__container">
          <label>Username </label>
          <input
            type="text"
            className="h-10 border-b-2 border-gray-300 rounded
             focus:outline-none focus:border-blue-300 mb-2"
            name="email"
            required
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
          />
          {renderErrorMessage('pass')}
        </div>
        <div className="flex justify-center">
          <Link to="/dashboard">
            <button
              type="submit"
              className="mt-4 cursor-pointer text-base bg-[#01d28e]
               text-white px-5 py-4 rounded hover:bg-green-500"
            >
              Submit
            </button>
          </Link>
        </div>
      </form>
    </div>
  );

  return (
    <div className="login flex flex-col items-center
    justify-center font-mono gap-6 h-screen bg-slate-300">
      <div className="login__container bg-white p-8 w-96 h-96">
        <div className="text-2xl mb-6 text-orange-500">Sign In</div>
        {isSubmitted ? redirect : renderForm}
      </div>
    </div>
  );
}
export default Login;

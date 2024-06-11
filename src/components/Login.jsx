import React, {useState} from 'react';
import Header from './Header';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState (true);
  const toggleSignInForm = () => {
    setIsSignInForm (!isSignInForm);
  };
    

  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="banner"
        />
      </div>
      <form className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-75 ">
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
         
        {! isSignInForm && <input
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 w-full  bg-gray-700 rounded-lg"
        />}

        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full  bg-gray-700 rounded-lg"
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="p-4 my-2 w-full bg-gray-700 rounded-lg"
        />

        
        <button className="p-4  my-6 bg-red-700 w-full rounded-lg">
        {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix? sign Up Now" : "Already Registered ? Sign in now"}
        </p>
      </form>

    </div>
  );
};

export default Login;

import React,{useState} from "react";
import Link from 'next/link';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
 import initFirebase from '../../firebase';
import Router from 'next/router';

// import { Form } from "react-router-dom";
// import {useNavigate} from "react-router-dom";

const Login = () => {
  const auth = initFirebase;
    // const Navigate = useNavigate();

    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[error,setError] = useState('');
    const handleLogin =  () => {
      if(email === '' || password === ''){
        console.log("please fill all feilds");
        setError("All feilds are not filled")
        return;
      }
      signInWithEmailAndPassword(auth,email,password)
      .then(() => {
        console.log("login successful")
        Router.push("/")
      }).catch((e) => {
        var ecode = e.code;
        if(ecode === 'auth/wrong-password'){
          setError("the password is wrong")
          return;
        }
        if (ecode === 'auth/user-not-found'){
          setError("User not found")
          return;
        }       
      })
    }
    console.log(error)
  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="/logo/logo512.png"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="space-y-6">
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange = {
                        (e) => {setEmail(e.target.value)}
                        
                    }
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    onChange = {
                        (e) => {setPassword(e.target.value)}
                    }
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-sky-600 focus:ring-sky-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>

                {/* <div className="text-sm">
                  <a href="#" className="font-medium text-sky-600 hover:text-sky-500">
                    Forgot your password?
                  </a>
                </div> </div>*/}
              

              <div>
                <button
                  onClick={handleLogin}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                >
                  Sign in
                </button>
              </div>
            </div>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  {/* <span className="px-2 bg-white text-gray-500">Or continue with</span> */}
                </div>
              </div>
                {/* <div>
                  <a
                    href="#"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span >Sign in with Google</span>
                  </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
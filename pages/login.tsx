import { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Image from 'next/image';
import { firebaseClient } from '../lib/firebaseClient';


const Login = () => {

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Email is invalid"),
    password: Yup.string()
      .min(6,"Password must be atleast 6 character long")
      .required("Password is required")
  })

  const formOptions = {resolver : yupResolver(validationSchema)}

  const {register , handleSubmit, formState:{errors}} = useForm();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  // const { signInWithEmailAndPassword } = useAuth();

  // const validation = {
  //   email: {required: "Email is required"},
  //   password:{
  //     required: "Password is required",
  //     minLength: {
  //       value: 8,
  //       message: "Password must be 8 character long"
  //     }
  //   }
  // }

  const handleLogin = async(data: any) => {
    await firebaseClient.auth().signInWithEmailAndPassword(data.email,data.password)
    .then(() => {
      console.log("Login successful");
      router.push("/")
    }).catch((error) => {
      setError(error.message)
    });

  }
  console.log(error)
  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Image
            className="mx-auto h-12 w-auto"
            src="/logo/logo512.png"
            alt="Workflow"
            width={40}
            height={40}
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={handleSubmit(handleLogin)}>
            <div className="space-y-6">

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    {...register('email' , {required: true , pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i})}
                    name="email"
                    type="email"            
                    // onChange={
                    //   (e) => { setEmail(e.target.value) }}
                    autoComplete="email"
                    className={(errors.email?.type === "required" || errors.email?.type === "pattern")? "shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" :  "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"}
                    
                  />
                  <p className="text-red-500 text-xs italic">{errors.email?.type === "required" && "Email is required"}</p>
                  <p className="text-red-500 text-xs italic">{errors.email?.type === "pattern" && "Email is in wrong format"}</p>
                  
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    {...register('password',{
                      required: true,
                      minLength: 6,
                      maxLength: 20
                    })}
                    name="password"
                    // onChange={
                    //   (e) => { setPassword(e.target.value) }
                    // }
                    type="password"
                    autoComplete="current-password"
                    className={(errors.email?.type === "required" || errors.email?.type === "pattern")? "shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" :  "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"}
                  />
                    <p className="text-red-500 text-xs italic">{errors.password?.type === "minLength" && "Minimum 6 characters should be there"}</p>
                    <p className="text-red-500 text-xs italic">{errors.password?.type === "maxLength" && "Maximum 20 characters can be there"}</p>
                    <p className="text-red-500 text-xs italic">{errors.password?.type === "required" && "Password is required"}</p>
                </div>
              </div>
              <div>
                <button
                  // onClick={handleLogin}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                >
                  Sign in
                </button>
              </div>
            </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;
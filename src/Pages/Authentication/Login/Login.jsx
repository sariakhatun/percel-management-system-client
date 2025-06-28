import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {

    let {register,handleSubmit,formState:{errors}} = useForm()
    let onSubmit = data=>{
        console.log(data)
    }

  return (
    
       
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
             <h1 className="text-3xl font-bold">Login Your Account!</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="fieldset">
              <label className="label">Email</label>
              <input type="email" {...register('email',{required:true})} className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" {...register('password',
              {required: true,
                minLength:6
              })}  className="input" placeholder="Password" />
              {
                errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>
              }
              {
                errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>
              }
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn  bg-[#CAEB66] text-black  mt-4">Login</button>
              <p><small>Don't have an account?<Link to='/register' className="btn btn-xs btn-link -ml-2">Register</Link> </small></p>
            </form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
     
  );
};

export default Login;

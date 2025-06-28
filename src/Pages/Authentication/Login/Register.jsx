import { useForm } from "react-hook-form";
import { AuthContext } from "../../../assets/Context/AuthContext/AuthContext";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
    //let {user,createUser}=use(AuthContext)
    let {createUser}=useAuth()
    let {register,handleSubmit,formState:{errors}}=useForm();

    let onSubmit = data =>{
        console.log(data)

       createUser(data.email,data.password)
       .then(res=>{
        console.log(res.user)
       })
       .catch(error=>{
        console.log(error)
       })
    }

  return (
   
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-3xl font-bold">Create an account!</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="fieldset">
                {/* email */}
              <label className="label">Email</label>
              <input type="email"
              {...register('email',{
                required:true
              })} className="input" placeholder="Email" />
              {
                errors.email?.type === 'required' && <p className="text-red-500">Email is required</p>
              }

              {/* password */}
              <label className="label">Password</label>
              <input type="password" 
              {...register('password',
                {
                    required:true,
                    minLength:6
                }
              )}
              className="input" placeholder="Password" />
              {
                errors.password?.type === 'required' && <p className="text-red-500">Password is required</p>
              }
             
              {
                errors.password?.type === 'minLength' && <p className="text-red-500">Password must be 6 characters or longer</p>
              }
             
              <button className="btn bg-[#CAEB66] text-black mt-4">Login</button>
              <p><small>Already have an account?<Link to='/login' className="btn btn-xs btn-link -ml-2">Login</Link> </small></p>
            </form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
     
  );
};

export default Register;

import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setUser, isAuthenticated } from "../utils/auth";
import Local from "../assets/photo/Local.jpg";
import "./Auth.css";
export default function Login() {

  //all hooks will be declare at component level..
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/user");
    }
  }, [navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const submitHandler = async(data) => {

    //{email:"",password:""}
    try{
      const res = await axios.post("http://localhost:3000/user/login", data);
      console.log("response...",res); //axios object
      console.log("response data...",res.data); //actual data
      if (res.status === 200) {
        setUser(res.data.data);
        toast.success("Login success");
        navigate("/user");
      }
  }catch(err){
      console.log("error...",err);
      //alert("login failed")
      toast.error("Login failed..")
  }

    
    //console.log("data...",data);
  };

  return (
    <div className="auth-layout">
      <div className="auth-image">
        <img src={Local} alt="office" />
      </div>

      <div className="auth-panel">
        <div className="auth-card">
          <h2>Welcome Here 😊</h2>
          <p className="subtitle">Please login to continue</p>

          <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">

            {/* EMAIL */}
            <div>
              <input
                type="email"
                placeholder="Email"
                className="auth-input"
                {...register("email", {
                  required: "Email is required"
                })}
              />
              {errors.email && (
                <p className="auth-error">{errors.email.message}</p>
              )}
            </div>

            {/* PASSWORD */}
            <div>
              <input
                type="password"
                placeholder="Password"
                className="auth-input"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters"
                  }
                })}
              />
              {errors.password && (
                <p className="auth-error">{errors.password.message}</p>
              )}
            </div>

            {/* BUTTON */}
            <button type="submit" className="auth-button">
              Login
            </button>

          </form>

          <p className="text-center text-gray-200 mt-6">
            Don&apos;t have an account?{' '}
            <span className="auth-link" onClick={() => navigate('/signup')}>
              Signup
            </span>
          </p>

        </div>
      </div>

    </div>
  );
}
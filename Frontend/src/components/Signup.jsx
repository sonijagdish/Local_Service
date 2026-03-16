import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { isAuthenticated, setUser } from "../utils/auth";
import Local from "../assets/photo/Local.jpg";
import "./Auth.css";

export default function Signup() {
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/user");
    }
  }, [navigate]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const password = watch("password");

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/user/register", data);
      if (res.status === 201) {
        setUser(res.data.data);
        toast.success("Signup successful. Redirecting...");
        navigate("/user");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="auth-layout">
      <div className="auth-image">
        <img src={Local} alt="office" />
      </div>

      <div className="auth-panel">
        <div className="auth-card">
          <h2>Create Account 🚀</h2>
          <p className="subtitle">Signup to get started</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            {/* NAME */}
            <div>
              <input
                type="text"
                placeholder="Full Name"
                className="auth-input"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="auth-error">{errors.name.message}</p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <input
                type="email"
                placeholder="Email"
                className="auth-input"
                {...register("email", { required: "Email is required" })}
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

            {/* CONFIRM PASSWORD */}
            <div>
              <input
                type="password"
                placeholder="Confirm Password"
                className="auth-input"
                {...register("confirmPassword", {
                  required: "Confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match"
                })}
              />
              {errors.confirmPassword && (
                <p className="auth-error">{errors.confirmPassword.message}</p>
              )}
            </div>

            {/* BUTTON */}
            <button type="submit" className="auth-button">
              Signup
            </button>

          </form>

          <p className="text-center text-gray-200 mt-6">
            Already have an account?{' '}
            <span className="auth-link" onClick={() => navigate('/')}>Login</span>
          </p>

        </div>
      </div>

    </div>
  );
}
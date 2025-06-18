import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import logoImg from "../../../../src/assets/images/logo.png";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://upskilling-egypt.com:3003/api/v1/Users/Login",
        data
      );

      localStorage.setItem("token", response?.data?.token);
      toast.success("Login success!");
      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data?.message || "Login Failed!";
        toast.error(message);
        console.log("Login Error:", error.response?.data || error.message);
      } else {
        toast.error("Unexpected error");
        console.log("Unexpected Error:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="auth-container">
        <div className="container">
          <div className="flex items-center justify-center min-h-screen shadow-amber-500">
            <div className="w-full md:w-1/2 bg-white rounded-2xl p-5">
              <div>
                {/* Logo */}
                <div className="text-center">
                  <img className="mx-auto" src={logoImg} alt="logo-image" />
                </div>

                {/* Title */}
                <div className="my-5">
                  <p
                    className="text-3xl font-semibold"
                    style={{ color: "#494949" }}
                  >
                    Log in
                  </p>
                  <p className="text-gray-500">
                    Welcome Back! Please enter your details
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* Email */}
                  <label
                    htmlFor="input-group-1"
                    className="block mb-2 text-sm font-medium"
                    style={{ color: "#494949" }}
                  >
                    Email
                  </label>
                  <div className="relative mb-6">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 16"
                      >
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="email"
                      placeholder="Enter your email address"
                      {...register("email", { required: "Email is required" })}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Password */}
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium"
                    style={{ color: "#494949" }}
                  >
                    Password
                  </label>
                  <div className="relative mb-6">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6-7h-1V7a5 5 0 0 0-10 0v3H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1Zm-8-3a3 3 0 0 1 6 0v3h-6V7Zm7 12H7v-7h10v7Z" />
                      </svg>
                    </div>
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter your password"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Password must be at least 6 characters",
                        },
                      })}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                    />
                    {errors.password && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.password.message}
                      </p>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex justify-between my-3">
                    <Link
                      to="/forget-password"
                      className="no-underline font-bold"
                    >
                      Forget Password?
                    </Link>
                    <Link to="/register" className="no-underline font-bold">
                      Register Now?
                    </Link>
                  </div>

                  {/* Button */}
                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={loading}
                      className="mt-2.5 w-96 text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                      style={{ backgroundColor: "#0367A1" }}
                    >
                      {loading ? "Loading..." : "Log In"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import logoImg from "../../../../src/assets/images/logo.png";

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    const postData = {
      email: data.email,
      password: data.password,
      password_confirm: data.password_confirm,
      first_name: data.first_name,
      last_name: data.last_name,
    };

    setLoading(true);
    try {
      await axios.post(
        "https://improved-alien-sharply.ngrok-free.app/user/register/",
        postData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      toast.success("Registration successful! Check your email for the verification code.");
      navigate("/verify-password");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("Full Error:", error.response?.data || error.message);
        const message =
          error.response?.data?.message ||
          error.response?.data?.detail ||
          "Registration Failed!";
        toast.error(message);
      } else {
        toast.error("Unexpected error");
        console.log("Unexpected Error:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  const password = watch("password");

  return (
    <div className="auth-container">
      <div className="container px-4 md:px-0">
        <div className="flex items-center justify-center min-h-screen shadow-amber-500">
          <div className="w-full max-w-lg md:max-w-2xl bg-white rounded-2xl p-5">
            <div className="text-center">
              <img className="mx-auto w-28 md:w-36" src={logoImg} alt="logo" />
            </div>

            <div className="my-5 text-center">
              <p className="text-2xl md:text-3xl font-semibold" style={{ color: "#494949" }}>
                Register
              </p>
              <p className="text-sm md:text-base text-gray-500">Create an account to continue</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    placeholder="Enter your first name"
                    {...register("first_name", { required: "First name is required" })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 mb-1"
                  />
                  {errors.first_name && <p className="text-red-500 text-sm mb-2">{errors.first_name.message}</p>}

                  <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    placeholder="Enter your last name"
                    {...register("last_name", { required: "Last name is required" })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 mb-1"
                  />
                  {errors.last_name && <p className="text-red-500 text-sm mb-2">{errors.last_name.message}</p>}

                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    {...register("email", { required: "Email is required" })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 mb-1"
                  />
                  {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email.message}</p>}

                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
                    Password
                  </label>
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 mb-1"
                  />
                  {errors.password && <p className="text-red-500 text-sm mb-2">{errors.password.message}</p>}

                  <label htmlFor="password_confirm" className="block mb-2 text-sm font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="password_confirm"
                    placeholder="Confirm your password"
                    {...register("password_confirm", {
                      required: "Confirm password is required",
                      validate: (value) => value === password || "Passwords do not match",
                    })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 mb-1"
                  />
                  {errors.password_confirm && <p className="text-red-500 text-sm mb-2">{errors.password_confirm.message}</p>}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between my-4 gap-2">
                <Link to="/verify-password" className="text-sm font-semibold text-blue-600">
                  Verify your account?
                </Link>
                <Link to="/login" className="text-sm font-semibold text-blue-600">
                  Already have an account?
                </Link>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-4 w-full text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                  style={{ backgroundColor: "#0367A1" }}
                >
                  {loading ? "Loading..." : "Register"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
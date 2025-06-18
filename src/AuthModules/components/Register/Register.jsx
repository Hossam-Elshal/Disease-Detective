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
      userName: data.userName,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword, // ✅ MUST be sent!
      country: data.country,
      phoneNumber: data.phoneNumber,
    };

    setLoading(true);
    try {
      await axios.post(
        "https://upskilling-egypt.com:3003/api/v1/Users/Register",
        postData
      );

      toast.success("Registration successful!");
      navigate("/verify");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message =
          error.response?.data?.message ||
          error.response?.data?.additionalInfo?.errors?.confirmPassword?.[0] ||
          "Registration Failed!";
        toast.error(message);
        console.log(
          "Registration Error:",
          error.response?.data || error.message
        );
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
      <div className="container">
        <div className="flex items-center justify-center min-h-screen shadow-amber-500">
          <div className="w-full md:w-1/2 bg-white rounded-2xl p-5">
            <div className="text-center">
              <img className="mx-auto" src={logoImg} alt="logo" />
            </div>

            <div className="my-5">
              <p
                className="text-3xl font-semibold"
                style={{ color: "#494949" }}
              >
                Register
              </p>
              <p className="text-gray-500">Create an account to continue</p>
            </div>

<form onSubmit={handleSubmit(onSubmit)}>
  <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-6">
    {/* Left Column Inputs */}
    <div>
      {/* User Name */}
      <label htmlFor="userName" className="block mb-2 text-sm font-medium text-gray-700">
        User Name
      </label>
      <input
        type="text"
        id="userName"
        placeholder="Enter your name"
        {...register("userName", { required: "Name is required" })}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-4"
      />
      {errors.userName && <p className="text-red-500 text-sm">{errors.userName.message}</p>}

      {/* Country */}
      <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-700">
        Country
      </label>
      <input
        type="text"
        id="country"
        placeholder="Enter your country"
        {...register("country", { required: "Country is required" })}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-4"
      />
      {errors.country && <p className="text-red-500 text-sm">{errors.country.message}</p>}

      {/* Password */}
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
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-4"
      />
      {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
    </div>

    {/* Right Column Inputs */}
    <div>
      {/* Email */}
      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
        Email
      </label>
      <input
        type="email"
        id="email"
        placeholder="Enter your email"
        {...register("email", { required: "Email is required" })}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-4"
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

      {/* Phone Number */}
      <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-700">
        Phone Number
      </label>
      <input
        type="text"
        id="phoneNumber"
        placeholder="Enter your phone number"
        {...register("phoneNumber", { required: "Phone number is required" })}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-4"
      />
      {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}

      {/* Confirm Password */}
      <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-700">
        Confirm Password
      </label>
      <input
        type="password"
        id="confirmPassword"
        placeholder="Confirm your password"
        {...register("confirmPassword", {
          required: "Confirm password is required",
          validate: (value) =>
            value === password || "Passwords do not match",
        })}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-4"
      />
      {errors.confirmPassword && (
        <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
      )}
    </div>
  </div>

  {/* Submit Button */}
  <div className="text-center">
    <button
      type="submit"
      disabled={loading}
      className="mt-4 w-96 text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
      style={{ backgroundColor: "#0367A1" }}
    >
      {loading ? "Loading..." : "Register"}
    </button>
  </div>

  {/* Link to login */}
  <div className="flex justify-end my-3">
    <Link to="/login" className="no-underline font-bold">
      Already have an account?
    </Link>
  </div>
</form>

          </div>
        </div>
      </div>
    </div>
  );
}

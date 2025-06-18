import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logoImg from "../../assets/images/logo.png";

export default function Reset() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const password = watch("password");

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await axios.post(
        "https://upskilling-egypt.com:3003/api/v1/Users/Reset",
        data
      );
      toast.success("Password reset successful!");
      reset();
      navigate("/login");
    } catch (error) {
      const message =
        error?.response?.data?.message || "Reset failed, please try again.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="container">
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-full md:w-1/2 bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-left">
              <img src={logoImg} alt="Logo" className="w-28 mb-4 mx-auto" />
              <h2 className="text-3xl font-bold text-gray-800 mb-1">
                Reset Password
              </h2>
              <p className="text-gray-500">
                Enter your info to reset your password
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
              {/* Email */}
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", { required: "Email is required" })}
                className="w-full p-2.5 mb-3 border border-gray-300 rounded-lg text-sm"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}

              {/* Verification Code */}
              <label
                htmlFor="seed"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Verification Code
              </label>
              <input
                type="text"
                id="seed"
                {...register("seed", { required: "Code is required" })}
                className="w-full p-2.5 mb-3 border border-gray-300 rounded-lg text-sm"
                placeholder="Enter verification code"
              />
              {errors.seed && (
                <p className="text-red-500 text-sm">{errors.seed.message}</p>
              )}

              {/* Password */}
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                New Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password", { required: "Password is required" })}
                className="w-full p-2.5 mb-3 border border-gray-300 rounded-lg text-sm"
                placeholder="Enter new password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}

              {/* Confirm Password */}
              <label
                htmlFor="confirmPassword"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                className="w-full p-2.5 mb-4 border border-gray-300 rounded-lg text-sm"
                placeholder="Confirm password"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {errors.confirmPassword.message}
                </p>
              )}

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 px-5 text-white rounded-lg text-sm font-medium"
                  style={{ backgroundColor: "#0367A1" }}
                >
                  {loading ? "Resetting..." : "Reset Password"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

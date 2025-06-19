import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logoImg from "../../assets/images/logo.png";

export default function Verify() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await axios.post(
        "/api/user/verify-code/",
        data
      );
      toast.success("Verification successful!");
      reset();
      navigate("/login"); // ✅ Go to login after success
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        "Verification failed, please try again.";
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
            <div className="text-center">
              <img src={logoImg} alt="Logo" className="mx-auto w-28 mb-4" />
              <div                  className="a7a text-left">
                <h2 style={{ color: "#494949" }} className="text-3xl font-bold text-gray-800 mb-1">
                  Verify Account
                </h2>
                <p className="text-gray-500">
                  Enter your email & verification code
                </p>
              </div>
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
                placeholder="Enter your email"
                {...register("email", { required: "Email is required" })}
                className="w-full p-2.5 mb-3 border border-gray-300 rounded-lg text-sm"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}

              {/* Verification Code */}
              <label
                htmlFor="code"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Verification Code
              </label>
              <input
                type="text"
                id="code"
                placeholder="Enter your code"
                {...register("code", {
                  required: "Verification code is required",
                })}
                className="w-full p-2.5 mb-4 border border-gray-300 rounded-lg text-sm"
              />
              {errors.code && (
                <p className="text-red-500 text-sm">{errors.code.message}</p>
              )}

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 px-5 text-white rounded-lg text-sm font-medium"
                  style={{ backgroundColor: "#0367A1" }}
                >
                  {loading ? "Verifying..." : "Verify"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

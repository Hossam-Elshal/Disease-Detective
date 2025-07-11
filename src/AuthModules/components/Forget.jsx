import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logoImg from "../../assets/images/logo.png";

export default function Forget() {
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
        "https://upskilling-egypt.com:3003/api/v1/Users/Reset/Request",
        data
      );
      toast.success("Reset link sent to your email!");
      reset();
      navigate("/reset-password"); 
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        "Failed to send reset link. Please try again.";
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
                Forgot Password
              </h2>
              <p className="text-gray-500">
                Enter your email to receive reset instructions.
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
                placeholder="Enter your email"
                {...register("email", { required: "Email is required" })}
                className="w-full p-2.5 mb-3 border border-gray-300 rounded-lg text-sm"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 px-5 text-white rounded-lg text-sm font-medium"
                  style={{ backgroundColor: "#0367A1" }}
                >
                  {loading ? "Sending..." : "Send Reset Code"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

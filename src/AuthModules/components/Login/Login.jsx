// import { MdEmail } from "react-icons/md";
import logoImg from "../../../../src/assets/images/logo.png";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="auth-container">
        <div className="container">
          <div className="flex items-center justify-center min-h-screen  shadow-amber-500">
            <div className="w-full md:w-1/2 bg-white rounded-2xl p-5">
              <div>
                {/* Logo */}
                <div className="text-center">
                  <img className=" mx-auto" src={logoImg} alt="logo-image" />
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

                {/* Form ===*/}
                <form>
                  {/* Email ============ */}

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
                      id="input-group-1"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                      placeholder="Enter your email address"
                    />
                  </div>

                  {/* Password ============ */}
                  <label
                    htmlFor="input-group-password"
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
                      id="input-group-password"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                      placeholder="Enter your password"
                    />
                  </div>
                  {/* Links */}
                  <div className="flex justify-end my-3">
                    <Link
                      to="/register"
                      className="no-underline font-bold"
                    >
                      Register Now?
                    </Link>
                  </div>

                  {/* Login Button */}
                  <div className=" text-center">
                    <button
                      type="submit"
                      className="mt-2.5 w-96 text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                      style={{ backgroundColor: "#0367A1" }}
                    >
                      Log In
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

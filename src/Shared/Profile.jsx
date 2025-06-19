import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import logoImg from "./../assets/images/logo.png";

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchProfile = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("No token found. Please log in.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("https://improved-alien-sharply.ngrok-free.app/user/profile/", {
        method: "GET",
        headers: {
          token: token, // ✅ بدون key: "token"
          "Content-Type": "application/json"
        }
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || "Request failed");
      }

      const data = await response.json();
      setProfile(data);
    } catch (error) {
      console.error("❌ Profile Fetch Error:", error.message);
      toast.error("Failed to fetch profile data");
    } finally {
      setLoading(false);
    }
  };

  fetchProfile();
}, []);


  if (loading) return <p className="text-center mt-10">Loading profile...</p>;
  if (!profile)
    return (
      <p className="text-center mt-10 text-red-500">No profile data found</p>
    );

  return (
    <div className="auth-container">
      <div className="container">
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-full md:w-1/2 bg-white rounded-2xl p-5 shadow-lg">
            <div className="text-center">
              <img className="mx-auto mb-4" src={logoImg} alt="logo" />
            </div>

            <div className="text-left mb-6">
              <h2 className="text-3xl font-semibold text-gray-800">
                Your Profile
              </h2>
              <p className="text-gray-500">Here are your account details</p>
            </div>

            <div className="space-y-4 text-gray-800 text-base px-2">
              <p>
                <strong>First Name:</strong> {profile.first_name}
              </p>
              <p>
                <strong>Last Name:</strong> {profile.last_name}
              </p>
              <p>
                <strong>Email:</strong> {profile.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

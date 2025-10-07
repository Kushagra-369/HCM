import React, { useState } from "react";
import axios from "axios";
import { APIURL } from "../../GlobalAPIURL";
import { showSuccessToast, showErrorToast } from "../Notification";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaSkull, FaArrowLeft } from "react-icons/fa";

export default function ChangeEmail() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    newEmail: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleChangeEmail = async (e) => {
    e.preventDefault();

    const userID = sessionStorage.getItem("UserId"); // ✅ fixed key
    const token = sessionStorage.getItem("UserToken");

    if (!userID || !token) {
      return showErrorToast("You must be logged in to change your email");
    }

    try {
      const response = await axios.put(
        `${APIURL}newEmail/${userID}`,
        {
          newEmail: formData.newEmail,
          password: formData.password,
        },
        {
          headers: {
            "x-api-key": token,
          },
        }
      );

      showSuccessToast(response.data.msg || "Email change request submitted");
      sessionStorage.setItem("Useremail", formData.newEmail);

      setFormData({ newEmail: "", password: "" });
      navigate(`/otp1/new_email/${userID}`);
    } catch (err) {
      showErrorToast(err.response?.data?.msg || "Failed to update email");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 py-12"
      style={{
        background: "radial-gradient(circle at center, #000000, #0d0d0d 90%)",
        fontFamily: "cursive",
      }}
    >
      <div className="w-full max-w-md bg-black bg-opacity-90 p-10 rounded-2xl shadow-2xl ring-2 ring-red-800 text-white relative overflow-hidden horror-glow">

        {/* Floating skull for atmosphere */}
        <div className="absolute top-5 right-5 text-red-700 text-3xl animate-pulse">
          <FaSkull />
        </div>

        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <img
            src="https://thumbs.dreamstime.com/b/evil-zombie-spooky-monster-eye-dark-horror-background-gothic-style-vampire-137171243.jpg"
            alt="Horror Avatar"
            className="w-20 h-20 mb-4 rounded-full border-4 border-red-800 shadow-lg"
          />
          <h2 className="text-4xl font-bold text-red-600 glow-text">CHANGE EMAIL</h2>
          <p className="text-gray-400 mt-2 glow-text">
            Dare to alter your identity...
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleChangeEmail} className="space-y-6">
          <div>
            <label className="block text-lg font-semibold text-red-500 mb-2 glow-text">
              <FaEnvelope className="inline-block mr-2 text-red-600" />
              New Email
            </label>
            <input
              type="email"
              name="newEmail"
              value={formData.newEmail}
              onChange={handleInputChange}
              placeholder="enter your cursed email..."
              className="w-full px-4 py-3 bg-black border border-red-700 rounded-md text-white placeholder-gray-500 focus:ring-2 focus:ring-red-700 focus:outline-none transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-semibold text-red-500 mb-2 glow-text">
              <FaLock className="inline-block mr-2 text-red-600" />
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="enter your secret..."
              className="w-full px-4 py-3 bg-black border border-red-700 rounded-md text-white placeholder-gray-500 focus:ring-2 focus:ring-red-700 focus:outline-none transition-all"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-800 hover:bg-red-900 rounded-full text-lg font-bold py-3 mt-6 transition-all shadow-lg glow-text"
          >
            Update Email
          </button>
        </form>

        {/* Back Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => navigate("/signed-in-1")}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-red-500 transition-all"
          >
            <FaArrowLeft /> Return to Profile
          </button>
        </div>

        {/* Horror Glow Overlay */}
        <div className="absolute inset-0 pointer-events-none horror-overlay"></div>

        <style>{`
          .glow-text {
            text-shadow: 0 0 6px #ff0000, 0 0 12px #ff0000, 0 0 24px #ff0000;
          }
          .horror-glow {
            box-shadow: 0 0 25px #ff0000, 0 0 50px #ff0000;
          }
          .horror-overlay::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: repeating-radial-gradient(
              circle,
              transparent,
              transparent 10px,
              rgba(255, 0, 0, 0.08) 11px
            );
            animation: pulse 6s infinite linear;
          }
          @keyframes pulse {
            0%, 100% {
              opacity: 0.2;
              transform: scale(1);
            }
            50% {
              opacity: 0.6;
              transform: scale(1.05);
            }
          }
        `}</style>
      </div>
    </div>
  );
}

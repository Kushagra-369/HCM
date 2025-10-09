import React, { useState } from "react";
import axios from "axios";
import { APIURL } from "../../GlobalAPIURL";
import { showSuccessToast, showErrorToast } from "../Notification";
import { useNavigate } from "react-router-dom";

export default function AdminPassChange() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();

    const adminID = sessionStorage.getItem("AdminId");
    const token = sessionStorage.getItem("AdminToken");

    if (!adminID || !token) {
      return showErrorToast("You must be logged in as admin to change password");
    }

    try {
      const response = await axios.put(
        `${APIURL}admin/changePassword/${adminID}`,
        {
          currentPassword: formData.currentPassword,
          newPassword: formData.newPassword,
        },
        {
          headers: {
            "x-api-key": token,
            Authorization: `Bearer ${token}`,
          },
        }
      );

      showSuccessToast(response.data.msg || "Password changed successfully");
      setFormData({ currentPassword: "", newPassword: "" });
    //   navigate("/admin_dashboard");
    } catch (err) {
      console.error(err);
      showErrorToast(err.response?.data?.msg || "Failed to change password");
    }
  };

  return (
    <div className="horror-bg flex flex-col items-center justify-center min-h-screen px-4 py-12">
      <div className="horror-card w-full max-w-md p-10">
        <div className="flex flex-col items-center mb-8">
          <img
            src="https://thumbs.dreamstime.com/b/evil-zombie-spooky-monster-eye-dark-horror-background-gothic-style-vampire-137171243.jpg"
            alt="Admin"
            className="w-20 h-20 mb-4 animate-pulse"
          />
          <h2 className="text-3xl horror-title font-bold text-center text-red-600 glitch">
            ADMIN CHANGE PASSWORD
          </h2>
          <p className="text-gray-400 mt-2 text-center">
            Keep your account safe.
          </p>
        </div>

        <form onSubmit={handleChangePassword}>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-red-400 mb-2">
                Current Password
              </label>
              <input
                type="password"
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleInputChange}
                placeholder="Enter current password"
                required
                className="horror-input"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-red-400 mb-2">
                New Password
              </label>
              <input
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleInputChange}
                placeholder="Enter new password"
                required
                className="horror-input"
              />
            </div>
          </div>

          <button type="submit" className="horror-btn mt-8">
            Update Password
          </button>
        </form>

        <div className="flex justify-center mt-6">
          <a
            href="/admin_dashboard"
            className="text-sm text-red-500 hover:text-red-700 transition"
          >
            Back to Dashboard
          </a>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import axios from 'axios';
import { APIURL } from '../../GlobalAPIURL';
import { showSuccessToast, showErrorToast } from '../Notification';
import './username.css';
import { useNavigate } from 'react-router-dom';

export default function ChangePassword() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    const userID = sessionStorage.getItem('UserId');
    const token = sessionStorage.getItem('UserToken');

    if (!userID || !token) {
      return showErrorToast('You must be logged in to change your password');
    }

    try {
      const response = await axios.put(
        `${APIURL}changePassword/${userID}`,
        {
          currentPassword: formData.currentPassword,
          newPassword: formData.newPassword,
        },
        {
          headers: { 'x-api-key': token },
        }
      );

      showSuccessToast(response.data.msg || 'Password changed successfully');
      navigate(`/`);
      setFormData({ currentPassword: '', newPassword: '' });
    } catch (err) {
      showErrorToast(err.response?.data?.msg || 'Failed to change password');
    }
  };

  return (
    <div className="horror-bg flex flex-col items-center justify-center min-h-screen px-4 py-12">
      <div className="horror-card w-full max-w-md p-10">
        <div className="flex flex-col items-center mb-8">
          <img
            src="https://thumbs.dreamstime.com/b/evil-zombie-spooky-monster-eye-dark-horror-background-gothic-style-vampire-137171243.jpg"
            alt="Skull"
            className="w-20 h-20 mb-4 animate-pulse"
          />
          <h2 className="text-3xl horror-title font-bold text-center text-red-600 glitch">
            CHANGE PASSWORD
          </h2>
          <p className="text-gray-400 mt-2 text-center">Escape the old... embrace the new.</p>
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
          <a href="/user_home" className="text-sm text-red-500 hover:text-red-700 transition">
            Back to Profile
          </a>
        </div>
      </div>
    </div>
  );
}

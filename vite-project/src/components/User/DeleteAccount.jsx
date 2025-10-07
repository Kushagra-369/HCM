import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import axios from 'axios';
import { showSuccessToast, showErrorToast } from "../Notification"; // Ensure these exist
import { useNavigate } from 'react-router-dom';
import { useAuth } from '..//AuthContext';
import { APIURL } from '../../GlobalAPIURL';

export default function DeleteAccount() {
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();
  const { setIsLog, setUserDashboard } = useAuth();

  const handleDeleteAccount = async () => {
    const confirmed = window.confirm(
      '⚠️ Are you sure you want to delete your account? This action is permanent.'
    );
    if (!confirmed) return;

    const id = sessionStorage.getItem('UserId');
    const token = sessionStorage.getItem('UserToken');

    if (!id || !token) {
      showErrorToast('You must be logged in to delete your account');
      return;
    }

    setIsDeleting(true);
    try {
      const response = await axios.delete(`${APIURL}userDelete/${id}`, {
        headers: {
          'x-api-key': token,
        },
      });

      showSuccessToast(response.data.msg || 'Your account has been deleted successfully.');

      sessionStorage.clear();
      localStorage.clear();
      setIsLog(false);
      setUserDashboard(false);

      navigate('/');
    } catch (err) {
      console.error(err);
      showErrorToast(err.response?.data?.msg || 'Failed to delete account.');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mt-12 animate-fadeIn">
      <h2 className="text-center text-2xl font-bold text-red-600">
        Delete Your Account
      </h2>
      <p className="text-center text-gray-600 mt-3">
        This will permanently remove your account and all associated data. This action cannot be undone.
      </p>

      <button
        onClick={handleDeleteAccount}
        disabled={isDeleting}
        className={`w-full mt-6 py-2 px-4 rounded-md text-white font-semibold transition ${
          isDeleting ? 'bg-red-300 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'
        }`}
      >
        {isDeleting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
            Deleting...
          </span>
        ) : (
          <span className="flex items-center justify-center gap-2">
            <FaTrash className="text-lg" />
            Delete My Account
          </span>
        )}
      </button>
    </div>
  );
}

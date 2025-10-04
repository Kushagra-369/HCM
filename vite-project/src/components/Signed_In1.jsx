import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { validationLogInSchema } from './Validation2';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { showSuccessToast, showErrorToast } from './Notification';
import { APIURL } from '../GlobalAPIURL';
import { useAuth } from './AuthContext.jsx';

export default function Signed_In1() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState('dark'); // default dark

  const { setIsLog, setUserData } = useAuth();  // ⬅️ get context setters

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  const SignData = [
    { name: 'email', placeholder: 'Enter your email', type: 'email' },
    { name: 'password', placeholder: 'Enter your password', type: 'password' },
    { name: 'confirmPassword', placeholder: 'Confirm your Password', type: 'password' },
  ];

  const formik = useFormik({
    initialValues: { email: '', password: '', confirmPassword: '' },
    validationSchema: validationLogInSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        setLoading(true);

        // Check password match
        if (values.password !== values.confirmPassword) {
          showErrorToast("Passwords do not match");
          setLoading(false);
          return;
        }

        const response = await axios.post(`${APIURL}LogInUser`, {
          email: values.email,
          password: values.password,
        });

        const { id, token } = response.data.data;
        if (response.status === 200 || response.status === 201) {
          showSuccessToast("Login successful");

          const { id, token } = response.data.data;
          const user = response.data.data;   // <-- assume API sends user info

          sessionStorage.setItem("UserId", id);
          sessionStorage.setItem("UserToken", token);

          // 🔥 Update AuthContext
          setIsLog(true);
          setUserData(user);

          navigate(`/`);
          resetForm();
        }

      } catch (err) {
        const msg = err.response?.data?.msg;
        if (msg === "Account already verified, please login") {
          showSuccessToast(msg);
          navigate("/log-in");
        } else {
          showErrorToast(msg || "An error occurred");
        }
      } finally {
        setLoading(false);
      }
    }

  });

  const isButtonDisabled = loading || !formik.isValid || !formik.dirty;

  const isDark = theme === 'dark';

  return (
    <div
      className={`min-h-screen  items-center font-mono transition-colors duration-500 ${isDark
        ? 'bg-gradient-to-br from-black via-blue-900 to-black text-red-100'
        : 'bg-gradient-to-br from-gray-100 via-white to-gray-200 text-gray-900'
        }`}
    >
      <div className="mb-6 flex justify-end p-4 w-full">
        <button
          onClick={toggleTheme}
          className={`px-4 py-2 rounded-lg font-semibold shadow-md ${isDark
            ? 'bg-white text-black hover:bg-gray-300'
            : 'bg-black text-white hover:bg-gray-800'
            }`}
        >
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      <div className=' flex justify-center items-center min-h-[80vh]'>
        <form
          onSubmit={formik.handleSubmit}
          className={`border-2 shadow-2xl px-8 py-10 w-[400px] rounded-xl transition-colors duration-500 ${isDark
            ? 'border-red-700 shadow-black bg-gradient-to-b from-gray-900 via-black to-red-900'
            : 'border-gray-400 shadow-gray-400 bg-white'
            }`}
        >
          <h1
            className={`text-center text-5xl font-bold drop-shadow-lg tracking-widest ${isDark ? 'text-red-600' : 'text-blue-600'
              }`}
          >
            LOG-IN
          </h1>

          {SignData.map((item, key) => (
            <div key={key} className="py-4">
              <label
                htmlFor={item.name}
                className={`block mb-2 text-lg uppercase tracking-wider ${isDark ? 'text-red-300' : 'text-gray-700'
                  }`}
              >
                {item.name}
              </label>
              <input
                id={item.name}
                name={item.name}
                type={item.type}
                placeholder={item.placeholder}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[item.name]}
                required
                className={`w-full p-3 rounded-md border focus:outline-none focus:ring-2 transition-colors ${isDark
                  ? 'bg-black/80 text-white placeholder-red-400 border-red-800 focus:ring-red-700'
                  : 'bg-gray-100 text-black placeholder-gray-500 border-gray-400 focus:ring-blue-600'
                  } ${formik.touched[item.name] && formik.errors[item.name]
                    ? 'border-red-500'
                    : ''
                  }`}
              />
              {formik.touched[item.name] && formik.errors[item.name] && (
                <div className="text-red-400 text-sm mt-1">
                  {formik.errors[item.name]}
                </div>
              )}
            </div>
          ))}

          <div className="flex justify-between px-1 text-sm mt-2">
            <span></span>
            <Link
              to="/forgot-password"
              className={`hover:underline ${isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'
                }`}
            >
              Forgot password?
            </Link>
          </div>

          <div className="pt-6">
            <button
              type="submit"
              disabled={isButtonDisabled}
              className={`w-full h-12 rounded-lg font-bold tracking-wide transition shadow-md ${isButtonDisabled
                ? 'bg-gray-400 cursor-not-allowed'
                : isDark
                  ? 'bg-red-800 hover:bg-red-600 shadow-red-800 hover:shadow-red-500 text-white'
                  : 'bg-blue-600 hover:bg-blue-500 shadow-blue-400 text-white'
                }`}
            >
              {loading ? 'Processing...' : 'ENTER'}
            </button>
          </div>
        </form>
      </div>

    </div>
  );
}

import React, { useState } from 'react';
import { useFormik } from 'formik';
import { validationLogInSchema } from './Validation2';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { showSuccessToast, showErrorToast } from './Notification';
import { APIURL } from '../GlobalAPIURL';
import { useAuth } from './AuthContext.jsx';
import Logo from './Logo.jsx';
export default function Signed_In1() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState('dark');

  const { setIsLog, setUserData, setAdminData, setAdminDashboard } = useAuth();

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  const SignData = [
    { name: 'email', placeholder: 'Enter your email', type: 'email' },
    { name: 'password', placeholder: 'Enter your password', type: 'password' },
    { name: 'confirm Password', placeholder: 'Confirm your Password', type: 'password' },
  ];

  const formik = useFormik({
    initialValues: { email: '', password: '', confirmPassword: '' },
    validationSchema: validationLogInSchema,
    onSubmit: async (values) => {
      // User login logic
      handleUserLogin(values);
    },
  });

  const handleUserLogin = async (values) => {
    try {
      setLoading(true);
      if (values.password !== values.confirmPassword) {
        showErrorToast("Passwords do not match");
        return;
      }

      const response = await axios.post(`${APIURL}LogInUser`, {
        email: values.email,
        password: values.password,
      });

      const { id, token } = response.data.data;
      if (response.status === 200 || response.status === 201) {
        showSuccessToast("Login successful");

        sessionStorage.setItem("UserId", id);
        sessionStorage.setItem("UserToken", token);

        setIsLog(true);
        setUserData(response.data.data);

        navigate(`/`);
        formik.resetForm();
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
  };

  const handleAdminLogin = async () => {
    try {
      setLoading(true);

      if (formik.values.password !== formik.values.confirmPassword) {
        showErrorToast("Passwords do not match");
        return;
      }

      const response = await axios.post(`${APIURL}LogInAdmin`, {
        email: formik.values.email,
        password: formik.values.password,
      });

      if (response.status === 200) {
        showSuccessToast(response.data.msg);

        const { id, token } = response.data.data;
        const adminData = { id, token, email: formik.values.email };
        console.log(id)

        // ✅ Ensure sessionStorage fully written before navigation
        sessionStorage.setItem("AdminId", id);
        sessionStorage.setItem("AdminToken", token);
        sessionStorage.setItem("Adminemail", formik.values.email);

        await new Promise((r) => setTimeout(r, 100));

        setAdminData(adminData);
        console.log(formik.values.email);

        navigate(`/otp1/admin/${id}`);
      }
    } catch (err) {
      const msg = err.response?.data?.msg;
      showErrorToast(msg || "Admin login failed");
      console.log(err)
    } finally {
      setLoading(false);
    }
  };



  const isButtonDisabled = loading || !formik.isValid || !formik.dirty;
  const isDark = theme === 'dark';

  return (
    <div className={` items-center font-mono transition-colors duration-500 ${isDark ? 'bg-gradient-to-br from-black via-blue-900 to-black text-red-100' : 'bg-gradient-to-br from-gray-100 via-white to-gray-200 text-gray-900'}`}>
      <div className="mb-6 flex justify-end 2xl:p-15 p-4 w-full">
        <button onClick={toggleTheme} className={`px-4 py-2 2xl:text-4xl  rounded-lg font-semibold shadow-md ${isDark ? 'bg-white text-black hover:bg-gray-300' : 'bg-black text-white hover:bg-gray-800'}`}>
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      <div className="flex justify-center items-center min-h-[80vh]">
        <form onSubmit={formik.handleSubmit} className={`border-2 shadow-2xl px-8 py-10 w-[400px] 2xl:h-full 2xl:w-[800px] rounded-xl transition-colors duration-500 ${isDark ? 'border-red-700 shadow-black bg-gradient-to-b from-gray-900 via-black to-red-900' : 'border-gray-400 shadow-gray-400 bg-white'}`}>
          <h1 className={`text-center 2xl:text-7xl text-5xl font-bold drop-shadow-lg tracking-widest ${isDark ? 'text-red-600' : 'text-blue-600'}`}>LOG-IN</h1>

          {SignData.map((item, key) => (
            <div key={key} className="py-4 2xl:py-8">
              <label htmlFor={item.name} className={`block mb-2 2xl:text-3xl text-lg uppercase tracking-wider ${isDark ? 'text-red-300' : 'text-gray-700'}`}>{item.name}</label>
              <input
                id={item.name}
                name={item.name}
                type={item.type}
                placeholder={item.placeholder}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[item.name]}
                required
                className={`w-full p-3  2xl:text-2xl rounded-md border focus:outline-none focus:ring-2 transition-colors ${isDark ? 'bg-black/80 text-white placeholder-red-400 border-red-800 focus:ring-red-700' : 'bg-gray-100 text-black placeholder-gray-500 border-gray-400 focus:ring-blue-600'} ${formik.touched[item.name] && formik.errors[item.name] ? 'border-red-500' : ''}`}
              />
              {formik.touched[item.name] && formik.errors[item.name] && (
                <div className="text-red-400 text-sm mt-1">{formik.errors[item.name]}</div>
              )}
            </div>
          ))}

          <div className="flex justify-between px-1 text-sm mt-2">
            <span></span>
            <Link to="/forgot-password" className={`hover:underline 2xl:text-xl ${isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}>Forgot password?</Link>
          </div>

          <div className="pt-6">
            <button type="submit" disabled={isButtonDisabled} className={`w-full 2xl:h-17 2xl:text-3xl h-12 rounded-lg font-bold tracking-wide transition shadow-md ${isButtonDisabled ? 'bg-gray-400 cursor-not-allowed' : isDark ? 'bg-red-800 hover:bg-red-600 shadow-red-800 hover:shadow-red-500 text-white' : 'bg-blue-600 hover:bg-blue-500 shadow-blue-400 text-white'}`}>
              {loading ? 'Processing...' : 'ENTER'}
            </button>
          </div>

          <div className="pt-6">
            <button type="button" onClick={handleAdminLogin} disabled={isButtonDisabled} className={`w-full h-12 2xl:h-17 2xl:text-3xl rounded-lg font-bold tracking-wide transition shadow-md ${isButtonDisabled ? 'bg-gray-400 cursor-not-allowed' : isDark ? 'bg-red-800 hover:bg-red-600 shadow-red-800 hover:shadow-red-500 text-white' : 'bg-blue-600 hover:bg-blue-500 shadow-blue-400 text-white'}`}>
              {loading ? 'Processing...' : 'ENTER AS ADMIN'}
            </button>
          </div>
        </form>
      </div>

      <div>
        <Logo />
      </div>
    </div>
  );
}

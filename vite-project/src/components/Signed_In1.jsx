import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { validationLogInSchema } from './Validation2';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { showSuccessToast, showErrorToast } from './Notification';
import { APIURL } from '../GlobalAPIURL';
import { motion } from 'framer-motion';

export default function Signed_In1() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

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
        const response = await axios.post(`${APIURL}LogInUser`, {
          email: values.email,
          password: values.password,
        });

        const { id, token } = response.data.data;
        if (response.status === 200 || response.status === 201) {
          showSuccessToast('Login successfully');
          sessionStorage.setItem('UserId', id);
          sessionStorage.setItem('UserToken', token);
          navigate(`/`);
          resetForm();
        }
      } catch (err) {
        const msg = err.response?.data?.msg;
        if (msg === 'Account already verified, please login') {
          showSuccessToast(msg);
          navigate('/log-in');
        } else {
          showErrorToast(msg || 'An error occurred');
        }
      } finally {
        setLoading(false);
      }
    },
  });

  const isButtonDisabled = loading || !formik.isValid || !formik.dirty;

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-black via-blue-900 to-black text-red-100 font-mono">
      <form
        onSubmit={formik.handleSubmit}
        className="border-2 border-red-700 shadow-2xl shadow-black px-8 py-10 w-[400px] bg-gradient-to-b from-gray-900 via-black to-red-900 rounded-xl"
      >
        <h1 className="text-center text-5xl font-bold text-red-600 drop-shadow-lg tracking-widest">
          LOG-IN
        </h1>

        {SignData.map((item, key) => (
          <div key={key} className="py-4">
            <label
              htmlFor={item.name}
              className="block mb-2 text-lg uppercase tracking-wider text-red-300"
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
              className={`w-full p-3 rounded-md bg-black/80 text-white placeholder-red-400 border ${
                formik.touched[item.name] && formik.errors[item.name]
                  ? 'border-red-500'
                  : 'border-red-800'
              } focus:outline-none focus:ring-2 focus:ring-red-700`}
            />
            {formik.touched[item.name] && formik.errors[item.name] && (
              <div className="text-red-400 text-sm mt-1">{formik.errors[item.name]}</div>
            )}
          </div>
        ))}

        <div className="flex justify-between px-1 text-sm mt-2">
          <span></span>
          <Link to="/forgot-password" className="hover:text-blue-600">
            Forgot password?
          </Link>
        </div>

        <div className="pt-6">
          <button
            type="submit"
            disabled={isButtonDisabled}
            className={`w-full h-12 ${
              isButtonDisabled ? 'bg-red-900 cursor-not-allowed' : 'bg-red-800 hover:bg-red-600'
            } text-white font-bold tracking-wide rounded-lg transition shadow-md shadow-red-800 hover:shadow-red-500`}
          >
            {loading ? 'Processing...' : 'ENTER THE DARK'}
          </button>
        </div>
      </form>
    </div>
  );
}

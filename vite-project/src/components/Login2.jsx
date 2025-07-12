import React, { useState } from 'react';
import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from "formik"
import { validationSignUpSchema } from "./Validation"
import { showSuccessToast, showErrorToast } from './Notification';
import * as Yup from 'yup'
import axios from "axios";
import { APIURL } from '../GlobalAPIURL'

export default function Login2() {

    const navigate = useNavigate()

    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
        initialValues: { name: '', email: '', password: '', },
        validationSchema: validationSignUpSchema,
        validateOnChange: true,
        validateOnBlur: true,

        onSubmit: async (values, { resetForm }) => {
            try {
                const response = await axios.post(`${APIURL}HCM`, values);

                const id = response.data.data._id
                const email = response.data.data.email
                if (response.status === 200 || response.status === 201) {
                    showSuccessToast(response.data.msg);
                    sessionStorage.setItem('Useremail', email)
                    navigate(`/otp1/user_otp/${id}`)
                    resetForm();
                }
            }
            catch (err) {
                if (err.response?.data?.msg == 'Account already verified, please login') {
                    showSuccessToast(err.response?.data?.msg);
                    navigate('/signedin1')
                }
                else {
                    showErrorToast(err.response?.data?.msg || 'An error occurred');

                }
            }
        }
    })

    const SignData = [
        { name: 'name', placeholder: 'Enter your name', type: 'text' },
        { name: 'email', placeholder: 'Enter your email', type: 'email' },
        { name: 'password', placeholder: 'Enter your password', type: 'password' },
    ];



    return (
        <div className="min-h-screen bg-black flex flex-col justify-center items-center" style={{
            backgroundImage: 'url(https://thumbs.dreamstime.com/b/path-dark-woods-spooky-tunnel-blue-light-haunted-forest-night-theme-horror-fantasy-scary-movie-mystic-background-323179329.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }}>
            <div className="flex justify-end w-full p-6">
                <div className="flex items-center">
                    <Link to="/login2" className="border-2 border-white text-white bg-black p-2 rounded-l-2xl">Light Theme</Link>
                    <Link to="/login" className='border-2 border-white bg-white p-2 rounded-r-2xl'>Dark Theme</Link>
                </div>
            </div>

            <div className="w-11/12 max-w-md md:max-w-2xl h-full bg-[#fff7f7] text-black border-2 border-red-700 rounded-3xl p-6 md:p-10 relative overflow-hidden">
                <svg className="absolute top-0 left-0 w-full h-10 pointer-events-none" viewBox="0 0 400 40" fill="none">
                    <path d="M0 0 Q100 40 200 0 Q300 -40 400 0 V40 H0Z" fill="#f87171" fillOpacity="0.25" />
                </svg>

                <h1 className="text-3xl md:text-4xl text-center text-red-700 py-5">
                    Join Us... <span className="animate-shake">Forever</span>
                </h1>


                <form onSubmit={handleSubmit} className="space-y-6">
                    {SignData.map((item, key) => (
                        <div key={key} className="flex flex-col">
                            <label htmlFor={item.name} className="text-red-600 mb-2 capitalize">
                                {item.name}
                            </label>
                            <input
                                name={item.name}
                                type={item.type}
                                value={values[item.name]}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id={item.name}
                                placeholder={item.placeholder + '...if you dare'}
                                required
                                className={`h-12 px-4 bg-[#fffafa] text-black border-2 border-red-600 rounded-xl ${touched[item.name] && errors[item.name] ? 'border-red-500' : 'border-gray-300'
                                    }`}
                            />
                            {touched[item.name] && errors[item.name] && (
                                <p className="text-sm text-red-500 mt-1">{errors[item.name]}</p>
                            )}
                        </div>
                    ))}

                    <div className="flex items-center gap-3">
                        <input
                            id="remember"
                            type="checkbox"
                            className="w-5 h-5 accent-red-600 rounded"
                        />
                        <label htmlFor="remember" className="text-red-700 text-base">
                            Remember my soul <span className="text-xs text-gray-500">(forever...)</span>
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="h-12 w-full bg-gradient-to-r hover:bg-gradient-to-r hover:from-red-700  hover:via-red-500 hover:to-red-700 from-red-600 via-red-400 to-red-600 text-white rounded-xl font-bold"
                    >
                        SIGN-IN IF YOU DARE
                    </button>
                </form>

                <form>
                    <h1 className=' py-5'>Already joined ? then log-in</h1>
                    <Link to='/signedin1'>
                        <button
                            className="drip-btn hover:bg-blue-600 bg-blue-500 h-10 w-full text-white rounded-2xl font-semibold relative transition"
                            type="submit"
                        >
                            <span className="relative z-10">LOG-IN</span>

                            {/* Falling drops */}
                            <span className="drop"></span>
                            <span className="drop"></span>
                            <span className="drop"></span>
                        </button>



                    </Link>
                </form>
            </div>
        </div>
    );
}

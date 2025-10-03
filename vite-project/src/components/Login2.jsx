import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import axios from "axios";
import { validationSignUpSchema } from "./Validation";
import { showSuccessToast, showErrorToast } from './Notification';
import { APIURL } from '../GlobalAPIURL';

export default function Login2() {

    const navigate = useNavigate();
    const [theme, setTheme] = useState("dark"); // light | dark

    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
        initialValues: { name: '', email: '', password: '', },
        validationSchema: validationSignUpSchema,
        validateOnChange: true,
        validateOnBlur: true,

        onSubmit: async (values, { resetForm }) => {
            try {
                const response = await axios.post(`${APIURL}HCM`, values);
                const id = response.data.data?._id;
                const email = response.data.data?.email;

                if (response.status === 200 || response.status === 201) {
                    showSuccessToast(response.data.msg);

                    if (response.data.msg === 'Account already verified, please login') {
                        // direct login if already verified
                        navigate('/signedin1');
                    } else {
                        // normal OTP flow
                        sessionStorage.setItem('Useremail', email);
                        navigate(`/otp1/user_otp/${id}`);
                        resetForm();
                    }
                }
            } catch (err) {
                showErrorToast(err.response?.data?.msg || 'An error occurred');
            }
        }

    });

    const SignData = [
        { name: 'name', placeholder: 'Enter your name', type: 'text' },
        { name: 'email', placeholder: 'Enter your email', type: 'email' },
        { name: 'password', placeholder: 'Enter your password', type: 'password' },
    ];

    // Theme styles
    const isDark = theme === "dark";
    const bgImage = isDark
        ? 'url(https://thumbs.dreamstime.com/b/grunge-red-forest-horror-background-red-color-grunge-background-horror-creepy-style-horror-background-dark-red-color-horror-326613608.jpg)'
        : 'url(https://media.istockphoto.com/id/177415910/vector/halloween-design-spooky-graveyard.jpg?s=612x612&w=0&k=20&c=I6rQ05RNcYvCdKfIk5_SSZuFwfRLeHdrYlJlVhf4Snc=)';

    const containerClasses = `w-11/12 max-w-md md:max-w-2xl h-full border-2 rounded-3xl p-6 md:p-10 relative overflow-hidden 
    ${isDark
            ? 'bg-[#1a1a1a] text-white border-red-700'  // darker form for dark theme
            : 'bg-white text-gray-800 border-gray-400'
        }`;

    return (
        <div className="min-h-screen flex flex-col justify-center items-center"
            style={{
                backgroundImage: bgImage,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>

            {/* Theme Toggle */}
            <div className="flex justify-end w-full p-6">
                <div className="flex items-center">
                    <button
                        onClick={() => setTheme("light")}
                        className={`border-2 p-2 rounded-l-2xl ${isDark ? 'bg-white text-black border-white' : ' bg-black text-white border-gray-500'}`}
                    >
                        Light Theme
                    </button>
                    <button
                        onClick={() => setTheme("dark")}
                        className={`border-2 p-2 rounded-r-2xl ${isDark ? 'bg-black text-white border-white' : 'bg-white text-black border-gray-500'}`}
                    >
                        Dark Theme
                    </button>
                </div>
            </div>

            <div className={containerClasses}>
                <svg className="absolute top-0 left-0 w-full h-10 pointer-events-none" viewBox="0 0 400 40" fill="none">
                    <path d="M0 0 Q100 40 200 0 Q300 -40 400 0 V40 H0Z" fill="#f87171" fillOpacity="0.25" />
                </svg>

                <h1 className="text-3xl md:text-4xl text-center text-red-700 py-5">
                    Join Us... <span className="animate-shake">Forever</span>
                </h1>

                {/* Sign Up Form */}
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
                                className={`h-12 px-4 rounded-xl border-2 ${touched[item.name] && errors[item.name] ? 'border-red-500' : 'border-gray-300'}`}
                            />
                            {touched[item.name] && errors[item.name] && (
                                <p className="text-sm text-red-500 mt-1">{errors[item.name]}</p>
                            )}
                        </div>
                    ))}

                    <div className="flex items-center gap-3">
                        <input id="remember" type="checkbox" className="w-5 h-5 accent-red-600 rounded" />
                        <label htmlFor="remember" className="text-red-700 text-base">
                            Remember my soul <span className="text-xs text-gray-500">(forever...)</span>
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="h-12 w-full bg-gradient-to-r from-red-600 via-red-400 to-red-600 hover:from-red-700 hover:via-red-500 hover:to-red-700 text-white rounded-xl font-bold"
                    >
                        SIGN-IN IF YOU DARE
                    </button>
                </form>

                {/* Already Joined */}
                <form>
                    <h1 className='py-5'>Already joined ? then log-in</h1>
                    <Link to='/signedin1'>
                        <button
                            className="drip-btn hover:bg-blue-600 bg-blue-500 h-10 w-full text-white rounded-2xl font-semibold relative transition"
                            type="submit"
                        >
                            <span className="relative z-10">LOG-IN</span>
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

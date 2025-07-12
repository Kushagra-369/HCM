import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { showSuccessToast, showErrorToast } from './Notification';
import { APIURL } from '../GlobalAPIURL';
import './OTP1.css';

export default function OTP1() {
  const navigate = useNavigate();
  const { userID, type } = useParams();
  const email = sessionStorage.getItem("Useremail");

  const [code, setcode] = useState(new Array(4).fill(""));
  const [isLoading, setLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setCanResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleResendOTP = async () => {
    if (!canResend) return;

    try {
      await axios.post(`${APIURL}resend_otp`, { email });
      showSuccessToast("OTP resent successfully!");

      setCanResend(false);
      setTimeLeft(30);

      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            setCanResend(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } catch (err) {
      showErrorToast(err.response?.data?.msg || "Failed to resend OTP");
    }
  };

  const handleChange = (element, index) => {
    const value = element.value;
    if (!/^\d?$/.test(value)) return;

    let newCode = [...code];
    newCode[index] = value;
    setcode(newCode);

    if (value && index < code.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const userOtp = code.join("");

    try {
      const response = await axios.post(`${APIURL}user_otp_verify/${userID}`, { otp: userOtp });

      if (response.status === 200) {
        showSuccessToast(response.data.msg);
        navigate('/signedin1');
      }
    } catch (err) {
      showErrorToast(err.response?.data?.msg || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center scary-bg">
      <div className='border-2 p-10 w-[350px] text-center rounded-3xl  bg-gradient-to-tr hover:scale-105 transition-all from-gray-900 via-gray-700 to-gray-900  bg-opacity-80 text-red-400 shadow-2xl shadow-red-700'>
        <h1 className='py-5 text-xl font-bold animate-pulse'>
          <p>We have sent a code to your email - <span className="font-bold">{email}</span></p>
        </h1>

        <h2 className="mb-2 py-5 text-lg">Enter OTP</h2>

        <form onSubmit={handleSubmit}>
          <div className='flex gap-5 py-3'>
            {code.map((data, index) => (
              <div key={index} className="w-16 h-16">
                <input
                  id={`otp-input-${index}`}
                  className="w-full h-full text-black text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white"
                  type="text"
                  maxLength="1"
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onFocus={(e) => e.target.select()}
                  onPaste={(e) => e.preventDefault()}
                />
              </div>
            ))}
          </div>

          <div className='px-10 py-5 w-full'>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-5 hover:bg-red-600 bg-red-700 text-white text-xl rounded-xl disabled:opacity-50"
            >
              {isLoading ? 'Verifying...' : 'Verify Account'}
            </button>
          </div>
        </form>

        <div className="flex justify-center text-red-500 space-x-1">
          <p>Didn't receive code?</p>
          {canResend ? (
            <button type="button" onClick={handleResendOTP} className="hover:text-blue-600 cursor-pointer">
              Resend
            </button>
          ) : (
            <span>Resend in {timeLeft}s</span>
          )}
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";

export default function MobileLogin() {
  const [form, setForm] = useState({ name: "", password: "", mobile: "" });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
    setErrors((s) => ({ ...s, [e.target.name]: null }));
    setMessage("");
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required.";
    if (!form.password || form.password.length < 6)
      errs.password = "Password must be at least 6 characters.";
    // Basic mobile validation (10 digits) — adapt to your locale if needed
    if (!/^[0-9]{10}$/.test(form.mobile))
      errs.mobile = "Enter a valid 10-digit mobile number.";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length) {
      setErrors(v);
      setMessage("");
      return;
    }
    // Demo behaviour: show a spooky success message.
    setMessage("The gate opens... you are logged in.");
    setErrors({});
    // TODO: replace with real submit logic (API call)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-red-200 relative overflow-hidden p-6">
      {/* Background textures (decorative, not interactive) */}
      <div className="absolute inset-0 bg-[url('https://i.ibb.co/b6wRbW5/horror-bg.jpg')] bg-cover bg-center opacity-20 pointer-events-none"></div>
      <div className="absolute inset-0 bg-red-900 opacity-6 mix-blend-overlay pointer-events-none animate-pulse-slow"></div>

      {/* Card / Foreground */}
      <div className="relative z-10 w-full max-w-sm bg-black/70 border border-red-800 rounded-2xl p-6 shadow-[0_10px_30px_rgba(255,0,0,0.12)]">
        <h1 className="text-2xl font-extrabold tracking-wider text-center text-red-400 drop-shadow-[0_0_12px_rgba(255,0,0,0.25)]">
          Mobile Login
        </h1>
        <p className="text-xs text-gray-400 text-center mt-1 italic">
          Enter your details... if you dare.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {/* Name */}
          <label className="block">
            <span className="text-xs text-red-300">Name</span>
            <input
              name="name"
              type="name"
              value={form.name}
              onChange={handleChange}
              autoComplete="name"
              aria-label="name"
              placeholder="Your mortal name"
              className={
                "w-full mt-2 px-4 py-2 rounded-lg bg-black/60 border " +
                (errors.name ? "border-rose-600" : "border-red-800") +
                " text-red-100 placeholder-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              }
            />
            {errors.name && <div className="text-xxs text-rose-500 mt-1">{errors.name}</div>}
          </label>       

          {/* Mobile */}
          <label className="block">
            <span className="text-xs text-red-300">Mobile Number</span>
            <input
              name="mobile"
              type="tel"
              value={form.mobile}
              onChange={handleChange}
              inputMode="numeric"
              pattern="[0-9]*"
              autoComplete="tel"
              aria-label="mobile"
              placeholder="10-digit number (e.g. 9876543210)"
              className={
                "w-full mt-2 px-4 py-2 rounded-lg bg-black/60 border " +
                (errors.mobile ? "border-rose-600" : "border-red-800") +
                " text-red-100 placeholder-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              }
            />
            {errors.mobile && <div className="text-xxs text-rose-500 mt-1">{errors.mobile}</div>}
          </label>

          <button
            type="submit"
            className="w-full mt-1 py-2 rounded-lg bg-red-800 text-white font-semibold shadow-[0_6px_18px_rgba(255,0,0,0.18)] hover:bg-red-700 active:scale-95 transition-transform"
          >
            Invoke Login
          </button>
        </form>

        {/* Message or hint */}
        <div className="mt-4 text-center">
          {message ? (
            <div className="text-sm text-green-200">{message}</div>
          ) : (
            <div className="text-xs text-gray-500">We will text your phone if needed...</div>
          )}
        </div>
      </div>

      {/* Small CSS for subtle pulse animation (Tailwind doesn't include this exact keyframe by default) */}
      <style>{`
        @keyframes pulse-slow {
          0% { opacity: 0.04; }
          50% { opacity: 0.12; }
          100% { opacity: 0.04; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .text-xxs { font-size: 11px; }
      `}</style>
    </div>
  );
}

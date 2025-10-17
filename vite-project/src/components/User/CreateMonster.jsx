import React, { useState, useEffect } from "react";
import axios from "axios";
import { APIURL } from "../../GlobalAPIURL";
import { showSuccessToast, showErrorToast } from "../Notification";

export default function CreateMonster() {
  const [monster, setMonster] = useState({
    eyes: 1,
    heads: 1,
    wings: "no",
    base: "fire",
    arms: 2,
    tentacles: "no",
  });

  const [loading, setLoading] = useState(false);
  const [disabledUntil, setDisabledUntil] = useState(null);
  const [countdown, setCountdown] = useState(""); // For live countdown

  // Check localStorage on mount
  useEffect(() => {
    const timestamp = localStorage.getItem("monsterSubmitTime");
    if (timestamp) {
      const disabledTime = parseInt(timestamp) + 24 * 60 * 60 * 1000; // 24 hrs
      if (Date.now() < disabledTime) {
        setDisabledUntil(disabledTime);
      } else {
        localStorage.removeItem("monsterSubmitTime");
      }
    }
  }, []);

  // Update countdown every second
  useEffect(() => {
    if (!disabledUntil) return;

    const interval = setInterval(() => {
      const remaining = disabledUntil - Date.now();
      if (remaining <= 0) {
        setDisabledUntil(null);
        localStorage.removeItem("monsterSubmitTime");
        setCountdown("");
        clearInterval(interval);
      } else {
        const hrs = Math.floor(remaining / (1000 * 60 * 60));
        const mins = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((remaining % (1000 * 60)) / 1000);
        setCountdown(
          `${hrs.toString().padStart(2, "0")}:${mins
            .toString()
            .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
        );
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [disabledUntil]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMonster({ ...monster, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = sessionStorage.getItem("UserToken");

      if (!token) {
        showErrorToast("You must be logged in to create a monster");
        setLoading(false);
        return;
      }

      const response = await axios.post(`${APIURL}monsters`, monster, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": token,
        },
      });

      showSuccessToast(response.data.msg || "Monster created successfully! 🎉");

      // Reset form
      setMonster({
        eyes: 1,
        heads: 1,
        wings: "no",
        base: "fire",
        arms: 2,
        tentacles: "no",
      });

      // Disable button for 24 hrs
      const now = Date.now();
      const disableTime = now + 24 * 60 * 60 * 1000;
      localStorage.setItem("monsterSubmitTime", now);
      setDisabledUntil(disableTime);
    } catch (error) {
      showErrorToast(
        error.response?.data?.msg ||
          error.response?.data?.message ||
          error.message ||
          "Failed to create monster ❌"
      );
    } finally {
      setLoading(false);
    }
  };

  const isDisabled = loading || (disabledUntil && Date.now() < disabledUntil);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">🧬 Create Your Monster</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-md space-y-4"
      >
        {/* Number of Eyes */}
        <div>
          <label className="block mb-1 text-gray-300">Number of Eyes 👁️</label>
          <select
            name="eyes"
            value={monster.eyes}
            onChange={handleChange}
            className="w-full bg-gray-700 text-white p-2 rounded"
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        {/* Number of Heads */}
        <div>
          <label className="block mb-1 text-gray-300">Number of Heads 🧠</label>
          <select
            name="heads"
            value={monster.heads}
            onChange={handleChange}
            className="w-full bg-gray-700 text-white p-2 rounded"
          >
            {[1, 2, 3].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        {/* Wings */}
        <div>
          <label className="block mb-1 text-gray-300">Wings 🪽</label>
          <select
            name="wings"
            value={monster.wings}
            onChange={handleChange}
            className="w-full bg-gray-700 text-white p-2 rounded"
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* Base Element */}
        <div>
          <label className="block mb-1 text-gray-300">Base Element 🌋</label>
          <select
            name="base"
            value={monster.base}
            onChange={handleChange}
            className="w-full bg-gray-700 text-white p-2 rounded"
          >
            {["fire", "water", "air", "sky", "earth"].map((el) => (
              <option key={el} value={el}>
                {el.charAt(0).toUpperCase() + el.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Number of Arms */}
        <div>
          <label className="block mb-1 text-gray-300">Number of Arms 💪</label>
          <select
            name="arms"
            value={monster.arms}
            onChange={handleChange}
            className="w-full bg-gray-700 text-white p-2 rounded"
          >
            {[2, 4, 6].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        {/* Tentacles */}
        <div>
          <label className="block mb-1 text-gray-300">Tentacles 🐙</label>
          <select
            name="tentacles"
            value={monster.tentacles}
            onChange={handleChange}
            className="w-full bg-gray-700 text-white p-2 rounded"
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isDisabled}
          className={`w-full mt-4 p-2 rounded text-white font-semibold transition ${
            isDisabled ? "bg-gray-600 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {isDisabled
            ? `Disabled (${countdown})`
            : loading
            ? "Submitting..."
            : "Submit Details"}
        </button>
      </form>
    </div>
  );
}

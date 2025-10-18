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
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const timestamp = localStorage.getItem("monsterSubmitTime");
    if (timestamp) {
      const disabledTime = parseInt(timestamp) + 24 * 60 * 60 * 1000;
      if (Date.now() < disabledTime) setDisabledUntil(disabledTime);
      else localStorage.removeItem("monsterSubmitTime");
    }
  }, []);

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

      showSuccessToast(response.data.msg || "Monster summoned successfully! 👹");

      setMonster({
        eyes: 1,
        heads: 1,
        wings: "no",
        base: "fire",
        arms: 2,
        tentacles: "no",
      });

      const now = Date.now();
      const disableTime = now + 24 * 60 * 60 * 1000;
      localStorage.setItem("monsterSubmitTime", now);
      setDisabledUntil(disableTime);
    } catch (error) {
      showErrorToast(
        error.response?.data?.msg ||
          error.response?.data?.message ||
          error.message ||
          "Failed to summon monster 💀"
      );
    } finally {
      setLoading(false);
    }
  };

  const isDisabled = loading || (disabledUntil && Date.now() < disabledUntil);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-red-950 to-black text-red-200 flex flex-col items-center py-10 px-4 relative overflow-hidden">
      {/* Horror fog effect */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] animate-pulse" />
      
      <h1 className="text-4xl font-extrabold mb-6 text-red-500 drop-shadow-[0_0_10px_#ff0000] animate-pulse font-[Creepster]">
        ☠️ Summon Your Monster ☠️
      </h1>

      <form
        onSubmit={handleSubmit}
        className="relative bg-black/70 backdrop-blur-md p-6 rounded-2xl border-2 border-red-700 shadow-[0_0_25px_#8b0000] w-full max-w-md space-y-4"
      >
        {["eyes", "heads", "wings", "base", "arms", "tentacles"].map((key) => (
          <div key={key}>
            <label className="block mb-1 text-gray-300 capitalize tracking-wider">
              {key === "base"
                ? "Base Element 🌋"
                : key === "wings"
                ? "Wings 🪽"
                : key === "tentacles"
                ? "Tentacles 🐙"
                : key === "eyes"
                ? "Number of Eyes 👁️"
                : key === "heads"
                ? "Number of Heads 🧠"
                : "Number of Arms 💪"}
            </label>
            <select
              name={key}
              value={monster[key]}
              onChange={handleChange}
              className="w-full bg-gray-900 border border-red-700 focus:border-red-500 focus:ring-2 focus:ring-red-600 text-red-100 p-2 rounded-md transition-all"
            >
              {key === "eyes" &&
                [1, 2, 3, 4, 5].map((n) => <option key={n}>{n}</option>)}
              {key === "heads" &&
                [1, 2, 3].map((n) => <option key={n}>{n}</option>)}
              {key === "wings" &&
                ["yes", "no"].map((n) => (
                  <option key={n} value={n}>
                    {n.toUpperCase()}
                  </option>
                ))}
              {key === "base" &&
                ["fire", "water", "air", "sky", "earth"].map((el) => (
                  <option key={el}>{el}</option>
                ))}
              {key === "arms" &&
                [2, 4, 6].map((n) => <option key={n}>{n}</option>)}
              {key === "tentacles" &&
                ["yes", "no"].map((n) => (
                  <option key={n} value={n}>
                    {n.toUpperCase()}
                  </option>
                ))}
            </select>
          </div>
        ))}

        <button
          type="submit"
          disabled={isDisabled}
          className={`w-full mt-6 p-3 text-lg rounded-md font-bold transition-all duration-300 ${
            isDisabled
              ? "bg-gray-700 text-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-red-800 via-red-600 to-red-800 text-white shadow-[0_0_20px_#ff0000] hover:shadow-[0_0_40px_#ff1a1a] hover:scale-105"
          }`}
        >
          {isDisabled
            ? `Cursed (${countdown})`
            : loading
            ? "Summoning..."
            : "Summon Now"}
        </button>
      </form>
    </div>
  );
}

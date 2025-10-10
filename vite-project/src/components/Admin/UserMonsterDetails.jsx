import React, { useEffect, useState } from "react";
import axios from "axios";
import { showErrorToast } from "../Notification";
import { APIURL } from "../../GlobalAPIURL";

export default function UserMonsterDetails() {
  const [monsters, setMonsters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMonsters = async () => {
      try {
        setLoading(true);
        setError("");

        // ✅ Get token from localStorage (or your auth context)
        const token = localStorage.getItem("token");

        // ✅ Fetch with Authorization header
        const res = await axios.get(`${APIURL}getAllMonsters`, {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        });

        if (res.data.success) {
          setMonsters(res.data.monsters);
        } else {
          setError(res.data.msg || "Failed to fetch monsters");
        }
      } catch (err) {
        console.error("Error fetching monsters:", err);
        const msg = err.response?.data?.msg || "Server error while fetching monsters";
        setError(msg);
        showErrorToast(msg);
      } finally {
        setLoading(false);
      }
    };

    fetchMonsters();
  }, []);

  if (loading) return <div className="text-center p-4">Loading monsters...</div>;
  if (error) return <div className="text-center text-red-500 p-4">{error}</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">🧬 Monster Collection</h2>

      {monsters.length === 0 ? (
        <div className="text-gray-500 text-center">No monsters found.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {monsters.map((monster) => (
            <div
              key={monster._id}
              className="p-4 bg-white text-black rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition"
            >
              <h3 className="text-lg text-black font-semibold mb-2">
                Monster ID: {monster._id}
              </h3>
              <p><b>Eyes:</b> {monster.eyes}</p>
              <p><b>Heads:</b> {monster.heads}</p>
              <p><b>Wings:</b> {monster.wings || "None"}</p>
              <p><b>Base:</b> {monster.base}</p>
              <p><b>Arms:</b> {monster.arms}</p>
              <p><b>Tentacles:</b> {monster.tentacles || "None"}</p>

              {monster.createdBy ? (
                <div className="mt-2 text-sm text-gray-700 border-t border-gray-200 pt-2">
                  <b>Created By:</b> {monster.createdBy.name || "Unknown"} <br />
                  <b>Email:</b> {monster.createdBy.email || "N/A"}
                </div>
              ) : (
                <div className="mt-2 text-sm text-gray-500 italic">Creator unknown</div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

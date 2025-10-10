import React, { useEffect, useState } from "react";
import axios from "axios";
import { APIURL } from "../../GlobalAPIURL";
import { showSuccessToast, showErrorToast } from "../Notification";

export default function GetReview() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get(`${APIURL}GetAllReviews`);
        if (res.data.status) {
          setReviews(res.data.data);
          showSuccessToast("Reviews loaded successfully!");
        } else {
          showErrorToast("Failed to load reviews.");
        }
      } catch (err) {
        console.error("Error fetching reviews:", err);
        showErrorToast("Error fetching reviews. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100 py-12 px-6">
      <h1 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
        User Suggestions
      </h1>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-purple-500 border-opacity-70"></div>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.length > 0 ? (
            reviews.map((r) => (
              <div
                key={r._id}
                className="bg-gray-800/70 backdrop-blur-lg shadow-lg rounded-2xl p-6 border border-gray-700 hover:shadow-purple-500/20 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="mb-3">
                  <p className="text-lg font-semibold text-purple-400">
                    {r.userId?.name || "Anonymous"}
                  </p>
                  <p className="text-sm text-gray-400">
                    {r.userId?.email || "No email provided"}
                  </p>
                </div>

                <p className="text-gray-300 italic leading-relaxed">
                  “{r.review}”
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-center col-span-3 text-lg">
              No reviews available yet.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { APIURL } from "../../GlobalAPIURL";
import { showSuccessToast, showErrorToast } from "../Notification";
import { Check } from "lucide-react";

export const validationSchema = Yup.object({
  review: Yup.string()
    .required("Review is required")
    .min(5, "Review must be at least 5 characters"),
});

export default function UserReview() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: { review: "" },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setIsSubmitting(true);
      try {
        const userId = sessionStorage.getItem("UserId");
        const token = sessionStorage.getItem("UserToken");

        if (!userId || !token) {
          showErrorToast("User credentials missing. Please log in again.");
          setIsSubmitting(false);
          return;
        }

        await axios.post(
          `${APIURL}CreateUserReview/${userId}`,
          { review: values.review },
          { headers: { "x-api-key": token } }
        );

        showSuccessToast("Review submitted successfully!");
        resetForm();
      } catch (err) {
        const message =
          err?.response?.data?.message ||
          err?.response?.data?.msg ||
          "Error submitting review.";
        showErrorToast(message);
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-gray-800/60 backdrop-blur-md rounded-3xl shadow-xl p-6 border border-gray-700">
        <h1 className="text-2xl font-bold text-center mb-6 text-white">
          Write a Review
        </h1>

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Your Review
            </label>
            <textarea
              name="review"
              rows={5}
              value={formik.values.review}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Write your review here..."
              className="block w-full px-4 py-3 rounded-xl border-2 border-gray-600 bg-gray-900 text-gray-100 placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none transition-all"
            />
            {formik.touched.review && formik.errors.review && (
              <p className="text-red-400 text-sm mt-1">
                {formik.errors.review}
              </p>
            )}
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 flex items-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : (
                <Check className="h-4 w-4" />
              )}
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { X, Check, Upload } from "lucide-react";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { APIURL } from "../../GlobalAPIURL";
import { showSuccessToast, showErrorToast } from "../Notification";

// Validation schema
const validationSchema = Yup.object({
  customerName: Yup.string()
    .required("Customer name is required")
    .min(2, "Too short"),
  customerEmail: Yup.string()
    .email("Invalid email address")
    .required("Customer email is required"),
  eyes: Yup.number()
    .required("Number of eyes is required")
    .min(0, "Cannot be negative"),
  heads: Yup.number()
    .required("Number of heads is required")
    .min(0, "Cannot be negative"),
  wings: Yup.string()
    .required("Wings is required")
    .oneOf(["yes", "no"], "Must be 'yes' or 'no'"),
  base: Yup.string()
    .required("Base is required")
    .oneOf(["fire", "water", "air", "sky", "earth"], "Invalid base"),
  arms: Yup.number()
    .required("Number of arms is required")
    .min(0, "Cannot be negative"),
  tentacles: Yup.string()
    .nullable()
    .oneOf(["yes", "no"], "Must be 'yes' or 'no'"),
  image: Yup.mixed()
    .required("Monster image is required")
    .test(
      "fileSize",
      "Image must be less than 5MB",
      (value) => value && value.size <= 5 * 1024 * 1024
    )
    .test(
      "fileType",
      "Unsupported File Format",
      (value) =>
        value &&
        ["image/jpeg", "image/png", "image/jpg"].includes(value.type)
    ),
});

export default function AdminMonster() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const formik = useFormik({
    initialValues: {
      customerName: "",
      customerEmail: "",
      eyes: "",
      heads: "",
      wings: "no",
      base: "",
      arms: "",
      tentacles: "no",
      image: null,
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);
      try {
        const adminId = sessionStorage.getItem("AdminId");
        const token = sessionStorage.getItem("AdminToken");

        if (!adminId || !token) {
          showErrorToast("Admin credentials missing. Please log in again.");
          setIsSubmitting(false);
          return;
        }

        const formData = new FormData();
        formData.append("customerName", values.customerName);
        formData.append("customerEmail", values.customerEmail);
        formData.append("eyes", values.eyes);
        formData.append("heads", values.heads);
        formData.append("wings", values.wings);
        formData.append("base", values.base);
        formData.append("arms", values.arms);
        formData.append("tentacles", values.tentacles);
        formData.append("image", values.image);
        formData.append("adminId", adminId);

        const res = await axios.post(
          `${APIURL}CreateMonsterByAdmin`,
          formData,
          {
            headers: {
              "x-api-key": token,
              "Content-Type": "multipart/form-data",
            },
          }
        );

        showSuccessToast("Monster created successfully!");
        formik.resetForm();
        setImagePreview(null);

        console.log("Created Monster:", res.data.data);
      } catch (error) {
        console.error(error);
        showErrorToast(error?.response?.data?.msg || "Error creating monster");
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  const handleFileChange = (file) => {
    formik.setFieldValue("image", file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const removeImage = () => {
    formik.setFieldValue("image", null);
    setImagePreview(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-10 px-4">
      <ToastContainer />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Create Monster</h1>

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {/* Customer Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["customerName", "customerEmail"].map((field) => (
              <div key={field}>
                <label className="block text-sm font-semibold mb-2">
                  {field === "customerName"
                    ? "Customer Name"
                    : "Customer Email"}
                </label>
                <input
                  type={field === "customerEmail" ? "email" : "text"}
                  name={field}
                  value={formik.values[field]}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder={`Enter ${
                    field === "customerName" ? "customer name" : "customer email"
                  }`}
                  className={`block w-full px-4 py-2 rounded-xl border-2 focus:outline-none bg-gray-800 text-white ${
                    formik.touched[field] && formik.errors[field]
                      ? "border-red-500"
                      : "border-gray-600"
                  }`}
                />
                {formik.touched[field] && formik.errors[field] && (
                  <p className="text-sm text-red-500 mt-1 flex items-center">
                    <X className="h-4 w-4 mr-1" /> {formik.errors[field]}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Image Upload Section */}
          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className={`relative border-2 border-dashed rounded-2xl p-6 text-center transition-all duration-200 ${
              dragActive
                ? "border-blue-500 bg-gray-800"
                : imagePreview
                ? "border-green-500 bg-gray-800"
                : "border-gray-600 hover:border-gray-500 bg-gray-800"
            }`}
          >
            {imagePreview ? (
              <div className="relative">
                <img
                  src={imagePreview}
                  alt="preview"
                  className="mx-auto max-h-56 rounded-xl shadow-lg"
                />
                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full p-2 hover:bg-red-700"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <div>
                <Upload className="mx-auto h-10 w-10 text-gray-400 mb-3" />
                <p className="font-medium text-gray-200 mb-1">
                  Drop your image here, or{" "}
                  <label className="text-blue-400 cursor-pointer underline">
                    browse
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        handleFileChange(e.target.files[0])
                      }
                      className="hidden"
                    />
                  </label>
                </p>
                <p className="text-sm text-gray-400">
                  Supports JPG, PNG up to 5MB
                </p>
              </div>
            )}
          </div>

          {formik.errors.image && formik.touched.image && (
            <p className="text-sm text-red-500 mt-1 flex items-center">
              <X className="h-4 w-4 mr-1" /> {formik.errors.image}
            </p>
          )}

          {/* Monster Attributes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: "eyes", label: "Eyes", type: "number" },
              { name: "heads", label: "Heads", type: "number" },
              { name: "wings", label: "Wings", type: "select", options: ["yes", "no"] },
              { name: "base", label: "Base", type: "select", options: ["fire", "water", "air", "sky", "earth"] },
              { name: "arms", label: "Arms", type: "number" },
              { name: "tentacles", label: "Tentacles", type: "select", options: ["yes", "no"] },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-semibold mb-2">
                  {field.label}
                </label>
                {field.type === "select" ? (
                  <select
                    name={field.name}
                    value={formik.values[field.name]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`block w-full px-4 py-2 rounded-xl border-2 focus:outline-none bg-gray-800 text-white ${
                      formik.touched[field.name] && formik.errors[field.name]
                        ? "border-red-500"
                        : "border-gray-600"
                    }`}
                  >
                    {field.options.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    value={formik.values[field.name]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder={field.label}
                    className={`block w-full px-4 py-2 rounded-xl border-2 focus:outline-none bg-gray-800 text-white ${
                      formik.touched[field.name] && formik.errors[field.name]
                        ? "border-red-500"
                        : "border-gray-600"
                    }`}
                  />
                )}
                {formik.touched[field.name] && formik.errors[field.name] && (
                  <p className="text-sm text-red-500 mt-1 flex items-center">
                    <X className="h-4 w-4 mr-1" /> {formik.errors[field.name]}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Submit Buttons */}
          <div className="flex justify-end gap-3">
            <button
              type="reset"
              onClick={() => {
                formik.resetForm();
                setImagePreview(null);
              }}
              className="px-6 py-2 border-2 border-gray-600 rounded-xl hover:bg-gray-800"
            >
              Reset
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl flex items-center disabled:opacity-50"
            >
              {isSubmitting ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              ) : (
                <>
                  <Check className="h-4 w-4 mr-2" /> Create Monster
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

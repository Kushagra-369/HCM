import React, { useRef, useState, useEffect } from "react";
import { useAuth } from "../AuthContext";
import axios from "axios";
import { APIURL } from "../../GlobalAPIURL";
import { showSuccessToast, showErrorToast } from "../Notification";
import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

export default function AdminProfile() {
    const { adminData, setAdminData } = useAuth();


    const fileInputRef = useRef();
    const defaultAvatar = "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?fm=jpg&q=60&w=3000";

    const [avatarUrl, setAvatarUrl] = useState(adminData?.profileIMG?.secure_url || adminData?.profileIMG?.url || adminData?.profileIMG || defaultAvatar);
    const [name, setName] = useState(adminData?.name || "Admin User");
    const [email, setEmail] = useState(adminData?.email || "No Email Provided");

    useEffect(() => {
        if (adminData?.name) setName(adminData.name);
        if (adminData?.email) setEmail(adminData.email);
    }, [adminData.DBDATA]);
    const [isEditing, setIsEditing] = useState(false);
    const [upload, setUpload] = useState(false);
    const [status, setStatus] = useState({ message: "", type: "" });
    const [file, setFile] = useState(null);


    // Sync name, email, avatar whenever adminData changes
    useEffect(() => {
        setName(adminData?.DBDATA?.name || sessionStorage.getItem("Adminname") || "Admin User");
        setEmail(adminData?.DBDATA?.email || sessionStorage.getItem("Adminemail") || "No Email Provided");
        setAvatarUrl(adminData?.profileIMG?.secure_url || adminData?.profileIMG?.url || adminData?.profileIMG || defaultAvatar);
    }, [adminData]);

    const handleIconClick = () => fileInputRef.current.click();

    const handleChangeProfile = (e) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
            setAvatarUrl(URL.createObjectURL(selectedFile));
        }
    };

    const uploadProfileImage = async () => {
        if (!file) {
            return showErrorToast("Please select a file first");
        }

        try {
            setUpload(true);

            const formData = new FormData();
            formData.append("profileIMG", file);

            const id = sessionStorage.getItem("AdminId");
            const token = adminData?.token || sessionStorage.getItem("AdminToken");

            console.log(token)
            if (!id || !token) {
                return showErrorToast("You must be logged in as admin to upload profile image");
            }

            const response = await axios.put(
                `${APIURL}UploadAdminProfileImg/${id}`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // ✅ Send token
                        "x-api-key": token,
                    },
                }
            );

            const secureUrl =
                response.data?.data?.profileIMG?.secure_url ||
                response.data?.data?.profileIMG?.url ||
                response.data?.data?.profileIMG;

            if (secureUrl) {
                setAdminData(prev => ({
                    ...prev,
                    profileIMG: { secure_url: secureUrl },
                }));
                setAvatarUrl(`${secureUrl}?t=${Date.now()}`);
                sessionStorage.setItem("AdminprofileIMG", secureUrl);
            }

            showSuccessToast(response.data?.msg || "Profile image updated successfully");
            setStatus({ message: "Successfully Updated", type: "success" });
        } catch (error) {
            console.error("Upload error:", error.response?.data || error);
            showErrorToast(error.response?.data?.msg || "Failed to upload image");
            setStatus({ message: "Upload failed", type: "error" });
        } finally {
            setUpload(false);
        }
    };



    const handleNameUpdate = async () => {
        const id = sessionStorage.getItem("AdminId");
        const token = sessionStorage.getItem("AdminToken");

        if (!id || !token) {
            showErrorToast("You must be logged in as admin to update your name");
            return;
        }

        try {
            const response = await axios.put(
                `${APIURL}userUpdated/${id}`,
                { name },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                        "x-api-key": token,
                    },
                }
            );

            setAdminData(prev => ({
                ...prev,
                DBDATA: { ...prev.DBDATA, name },
            }));
            sessionStorage.setItem("Adminname", name);

            showSuccessToast(response.data?.msg || "Name updated successfully");
            setIsEditing(false);
        } catch (err) {
            console.error("Name update error:", err?.response || err);
            showErrorToast(err.response?.data?.msg || "Failed to update name");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center py-10 px-4" style={{ background: "radial-gradient(circle at center, #0d0d0d, #000000 90%)", fontFamily: "cursive" }}>
            <div className="w-full max-w-2xl p-8 bg-black bg-opacity-90 rounded-xl shadow-2xl ring-2 ring-red-800 text-white">
                {/* PROFILE HEADER */}
                <div className="flex flex-col items-center mb-8">
                    <div className="relative w-24 h-24 mb-4 border-4 border-red-700 rounded-full overflow-hidden glow-effect">
                        <img src={avatarUrl} alt="Profile" className="w-full h-full object-cover" />
                        <button type="button" onClick={handleIconClick} className="absolute bottom-0 right-0 bg-red-700 border border-black p-1 rounded-full shadow-lg hover:bg-red-900 transition-all">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-.414-.414A1 1 0 0013.586 4H6.414a1 1 0 00-.707.293l-.414.414A1 1 0 014.586 5H4zM10 13a3 3 0 100-6 3 3 0 000 6z" />
                            </svg>
                        </button>
                        <input type="file" ref={fileInputRef} accept="image/*" onChange={handleChangeProfile} className="hidden" />
                    </div>

                    <button onClick={uploadProfileImage} disabled={upload} className="px-4 py-2 bg-red-800 hover:bg-red-900 rounded-full text-lg font-bold text-white transition-all disabled:opacity-60">
                        {upload ? "Uploading...." : "Upload"}
                    </button>

                    {status.message && (
                        <div className={`mt-4 p-3 rounded-lg text-sm flex items-center ${status.type === "success" ? "bg-green-900 text-green-300" : "bg-red-900 text-red-300"}`}>
                            {status.type === "success" ? <FaCheckCircle className="mr-2" /> : <FaExclamationTriangle className="mr-2" />}
                            {status.message}
                        </div>
                    )}

                    <h2 className="text-4xl font-bold text-red-600 mt-4 glow-text">PROFILE</h2>
                    <p className="text-gray-400 text-lg mt-1 glow-text">Welcome back!</p>
                </div>

                {/* PROFILE DETAILS */}
                <div className="space-y-6 text-center sm:text-left sm:space-y-4 sm:px-4">
                    <div>
                        <label className="block text-lg font-semibold text-red-500 mb-1 glow-text">Name:</label>
                        {isEditing ? (
                            <div className="flex items-center gap-2">
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="border border-red-700 px-3 py-1 rounded-md text-base w-full bg-black text-white" />
                                <button onClick={handleNameUpdate} className="px-4 py-1 bg-red-800 hover:bg-red-900 rounded-md text-white font-bold">Save</button>
                                <button onClick={() => setIsEditing(false)} className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded-md text-gray-300">Cancel</button>
                            </div>
                        ) : (
                            <div className="flex justify-between items-center">
                                <p className="text-white text-base glow-text">{adminData?.name}</p>
                                <button onClick={() => setIsEditing(true)} className="text-sm text-red-500 hover:underline glow-text">Edit</button>
                            </div>
                        )}
                    </div>

                    <div>
                        <label className="block text-lg font-semibold text-red-500 mb-1 glow-text">Email:</label>
                        <p className="text-white text-base glow-text">{adminData?.email}</p>
                    </div>
                </div>
            </div>

            <style>{`
                .glow-text { text-shadow: 0 0 5px #ff0000, 0 0 10px #ff0000, 0 0 20px #ff0000; }
                .glow-effect { box-shadow: 0 0 20px #ff0000, 0 0 40px #ff0000, 0 0 60px #ff0000; }
            `}</style>
        </div>
    );
}

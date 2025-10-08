import React, { useState } from "react";
import App from "../../App";
import AdminProfile from "./AdminProfile";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome } from "react-icons/fa";

export default function Admin_home() {
  const [activeTab, setActiveTab] = useState("home");

  // Only one tab for now
  const mainItems = [
    { key: "home", label: "Dashboard", icon: <FaHome /> },
    { key: "profile", label: "Profile", icon: <FaHome /> },
];

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <App />;
      case "profile":
        return <AdminProfile />;
      default:
        return <App />;
    }
  };

  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "radial-gradient(circle at center, #0b0b0b, #1a1a1a, #0b0b0b)",
        fontFamily: "'Creepster', cursive",
        color: "white",
      }}
    >
      {/* Desktop Layout */}
      <div className="hidden lg:flex">
        {/* Sidebar */}
        <div className="w-1/5 bg-black bg-opacity-90 shadow-lg p-4 flex flex-col justify-between h-screen border-r border-red-800">
          <div>
            <h1 className="text-center text-2xl font-bold text-red-600 mb-6">
              ADMIN PANEL
            </h1>
            {mainItems.map((item) => (
              <motion.button
                key={item.key}
                onClick={() => setActiveTab(item.key)}
                className={`flex items-center gap-3 px-4 py-3 w-full text-left rounded-md transition ${
                  activeTab === item.key
                    ? "bg-red-800 text-white font-semibold"
                    : "hover:bg-red-900 hover:text-white"
                } glow-hover`}
                whileTap={{ scale: 0.98 }}
              >
                {item.icon}
                {item.label}
              </motion.button>
            ))}
          </div>

          <div className="text-center text-gray-500 text-sm py-3">
            © 2025 Admin Panel
          </div>
        </div>

        {/* Main Content */}
        <div className="w-4/5 overflow-y-auto">{renderContent()}</div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col min-h-screen">
        <div className="flex-1 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-90 shadow-inner border-t border-red-800 flex justify-around z-50">
          {mainItems.map((item) => (
            <motion.button
              key={item.key}
              onClick={() => setActiveTab(item.key)}
              className={`flex flex-col items-center justify-center py-2 px-2 text-sm flex-1 ${
                activeTab === item.key
                  ? "text-red-600 font-semibold"
                  : "text-gray-400 hover:text-red-600"
              } glow-text`}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-lg">{item.icon}</div>
              <div className="text-[11px]">{item.label}</div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Glow Styles */}
      <style>
        {`
          .glow-text {
            text-shadow: 0 0 8px #ff0000, 0 0 16px #ff0000, 0 0 24px #ff0000;
          }
          .glow-hover:hover {
            box-shadow: 0 0 10px #ff0000, 0 0 20px #ff0000;
          }
        `}
      </style>
    </div>
  );
}

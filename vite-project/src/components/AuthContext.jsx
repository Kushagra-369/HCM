import React, { useState, createContext, useContext } from "react";

const AuthContext = createContext(null); // ✅ best practice

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isLog, setIsLog] = useState(false);
  const [userDashboard, setUserDashboard] = useState(false);  // ✅ lowercase
  const [adminDashboard, setAdminDashboard] = useState(false); // ✅ lowercase
  const [userData, setUserData] = useState({});
  const [adminData, setAdminData] = useState({});

  const value = {isLog,  setIsLog,  userDashboard, setUserDashboard,  userData, setUserData,   adminData,  setAdminData,    adminDashboard, setAdminDashboard,};

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

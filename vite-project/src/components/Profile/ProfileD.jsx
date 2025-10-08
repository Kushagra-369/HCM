import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import { FiUser, FiSettings, FiLogOut } from 'react-icons/fi';
import { useAuth } from '../AuthContext';

export default function ProfileD() {
  const { setIsLog, setUserDashboard, userData } = useAuth();
  const navigate = useNavigate();

  const defaultAvatar =
    "https://thumbs.dreamstime.com/b/evil-zombie-spooky-monster-eye-dark-horror-background-gothic-style-vampire-137171243.jpg";

  // ✅ Safely get user info
  const [name] = useState(userData?.DBDATA?.name || "");
  const email =
    userData?.DBDATA?.email ||
    sessionStorage.getItem("Useremail") ||
    "";
  const [avatarUrl] = useState(
    userData?.DBDATA?.profileIMG?.secure_url || defaultAvatar
  );

  const user = {
    name: name || "Kushagra", // fallback name
    email: email || "kushagra@gmail.com", // fallback email
    avatar: avatarUrl,
  };

  const LogOutUser = () => {
    console.log("Signing out...");
    setIsLog(false);
    setUserDashboard(false);
    localStorage.removeItem("isLog");
    localStorage.removeItem("UserDashboard");
    navigate("/");
  };

  const menuItems = [
    { name: "Profile", link: "/profile", icon: FiUser },
    { name: "Settings", link: "/userhome", icon: FiSettings },
    { name: "SignOut", click: LogOutUser, icon: FiLogOut },
  ];

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="relative flex items-center justify-center rounded-full bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800">
        <span className="sr-only">Open user menu</span>
        <img
          src={user.avatar}
          alt="User avatar"
          className="h-18 w-18 rounded-full"
        />
      </Menu.Button>

      <Menu.Items className="absolute right-0 left-5 z-10 mt-2 w-56 origin-top-right rounded-md bg-white py-2 ring-1 focus:outline-none">
        <div className="px-4 py-3 border-b border-gray-200 text-sm">
          <p className="text-black">Name: {user.name}</p>
          <p className="text-black">Email: {user.email}</p>
        </div>

        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Menu.Item key={index}>
              {({ active }) =>
                item.link ? (
                  <Link
                    to={item.link}
                    onClick={item.click}
                    className={`flex items-center gap-3 px-4 py-2 text-sm ${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    {item.name}
                  </Link>
                ) : (
                  <button
                    onClick={item.click}
                    className={`flex w-full items-center gap-3 px-4 py-2 text-sm text-left ${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    {item.name}
                  </button>
                )
              }
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
}

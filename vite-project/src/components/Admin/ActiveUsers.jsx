import React, { useEffect, useState } from "react";
import axios from "axios";
import { APIURL } from '../../GlobalAPIURL';

export default function ActiveUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Call backend API
    axios.get(`${APIURL}getAllUsers`) // adjust base URL if needed
      .then((res) => {
        if (res.data.status) {
          setUsers(res.data.data);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Active Users</h2>
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user._id}>
                <td className="p-2 border">{user.name}</td>
                <td className="p-2 border">{user.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2" className="text-center p-4">
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

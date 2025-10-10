import React, { useEffect, useState } from "react";
import axios from "axios";
import { APIURL } from "../GlobalAPIURL";
import { showErrorToast } from "./Notification";

export default function YourMonsters() {
    const [monsters, setMonsters] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchMonsters = async () => {
        try {
            const response = await axios.get(`${APIURL}getAllCreatedMonsters`);
            setMonsters(response.data.monsters || []);
        } catch (error) {
            console.error("❌ Error fetching monsters:", error);
            showErrorToast(
                error.response?.data?.msg ||
                error.response?.data?.message ||
                error.message ||
                "Failed to fetch monsters ❌"
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMonsters();
    }, []);

    if (loading) {
        return <div className="text-white p-6">Loading monsters...</div>;
    }

    if (monsters.length === 0) {
        return <div className="text-white p-6">No monsters found.</div>;
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            <h1 className="text-3xl font-bold mb-6">🧬 All Monsters</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {monsters.map((monster) => (
                    <div
                        key={monster._id}
                        className="bg-gray-800 p-4 rounded-lg shadow-md"
                    >
                        {/* Monster Image */}
                        {monster.imageUrl && (
                            <img
                                src={monster.imageUrl}
                                alt="Monster"
                                className="w-full h-48 object-cover rounded mb-4"
                            />
                        )}



                        {/* Customer Info */}
                        <p>
                            <strong>Customer Name:</strong>{" "}
                            {monster.customerName || monster.createdBy?.name || "Unknown"}
                        </p>
                        <p>
                            <strong>Customer Email:</strong>{" "}
                            {monster.customerEmail || monster.createdBy?.email || "Not available"}
                        </p>

                        {/* Monster Details */}
                        <p><strong>Eyes:</strong> {monster.eyes}</p>
                        <p><strong>Heads:</strong> {monster.heads}</p>
                        <p><strong>Wings:</strong> {monster.wings}</p>
                        <p><strong>Base:</strong> {monster.base}</p>
                        <p><strong>Arms:</strong> {monster.arms}</p>
                        <p><strong>Tentacles:</strong> {monster.tentacles}</p>
                        <p>
                            <strong>Created At:</strong>{" "}
                            {new Date(monster.createdAt).toLocaleString()}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

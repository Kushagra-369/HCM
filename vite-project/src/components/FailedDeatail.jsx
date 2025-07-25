// FailedDetail.jsx
import React from 'react';
import './FailedDetail.css'; // optional for custom CSS if not using Tailwind

export default function FailedDetail({ detail }) {
  return (
    <div className="animate-spin-slow text-sm md:text-lg px-2 text-white text-center">
      {detail}
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { Button } from "@mui/material";

export default function ServicePage() {
  const [trackingNumber, setTrackingNumber] = useState("");

  const features = [
    {
      icon: "📦",
      title: "Fast & Reliable",
      desc: "Experience quick and dependable shipping every time.",
    },
    {
      icon: "✈️",
      title: "Worldwide Delivery",
      desc: "Delivering to over 200+ destinations globally.",
    },
    {
      icon: "💼",
      title: "Business Friendly",
      desc: "Specialized solutions for companies and professionals.",
    },
  ];
  const handleTrack = () => {
    const orderId = trackingNumber.trim();
    if (!orderId) return;

    window.location.href = `https://app.international.nepalcan.com/public/tracking/${orderId}`;
  };

  return (
    <div className="w-screen ml-[calc(50%-50vw)] bg-[radial-gradient(circle_at_top_left,rgba(255,0,0,0.15),white)] py-4 md:py-20">
      {/* PAGE TITLE */}
      <h1 className="text-4xl font-extrabold text-center text-gray-900">
        Our Services
      </h1>

      <p className="text-center text-gray-600 mt-2 text-lg">
        Explore what Nepal Can International offers to customers and businesses
      </p>

      {/* FEATURE CARDS */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 w-full md:w-[1000px] mx-auto">
        {features.map((item, i) => (
          <div
            key={i}
            className="bg-white/90 backdrop-blur-xl p-8 rounded-2xl shadow-2xl 
                   text-center hover:scale-105 transition-all duration-300 border border-white/40"
          >
            <div className="mb-4 flex justify-center">{item.icon}</div>

            <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
            <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* TRACKING BAR */}
      <div
        className="mt-10 bg-white/95 backdrop-blur-xl p-3 md:p-4 rounded-2xl shadow-2xl 
               w-full md:w-[650px] mx-auto flex items-center gap-3"
      >
        <input
          type="text"
          placeholder="Enter your tracking number(s)"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          className="flex-grow px-4 py-3 text-gray-700 bg-white rounded-xl 
                 outline-none text-sm md:text-base shadow-md"
        />
        <Button
          variant="contained"
          onClick={handleTrack}
          sx={{
            bgcolor: "var(--custom-red)",
            px: 4,
            py: 1.8,
            fontSize: "1rem",
            fontWeight: "bold",
            textTransform: "none",
            borderRadius: "12px",
            "&:hover": { bgcolor: "#c60000" },
          }}
        >
          Track
        </Button>
      </div>
    </div>
  );
}

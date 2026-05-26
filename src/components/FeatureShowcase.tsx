"use client";

import React, { useState } from "react";

export default function FeatureShowcase() {
  const [activeTab, setActiveTab] = useState<"studio" | "player" | "shopper">("studio");

  const tabs = [
    { id: "studio", label: "AI Studio", desc: "Create interactive, shoppable videos at scale.", color: "var(--primary-blue-gradient)" },
    { id: "player", label: "AI Player", desc: "Embed TikTok-style video feeds on your site.", color: "var(--primary-purple-gradient)" },
    { id: "shopper", label: "AI Shopper", desc: "Provide personalized shopping assistants for your customers.", color: "var(--primary-green-gradient)" },
  ];

  return (
    <section style={{ padding: "100px 20px", maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
      <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "20px" }}>
        One platform. Endless possibilities.
      </h2>
      <p style={{ fontSize: "1.2rem", color: "#666", marginBottom: "60px", maxWidth: "600px", margin: "0 auto 60px" }}>
        Discover how our integrated suite of tools can transform your eCommerce experience.
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", marginBottom: "40px" }}>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className="glass-card"
            style={{
              padding: "20px 30px",
              cursor: "pointer",
              transition: "transform 0.3s ease, background 0.3s ease",
              background: activeTab === tab.id ? tab.color : "var(--glass-bg)",
              transform: activeTab === tab.id ? "scale(1.05)" : "scale(1)",
              flex: "1 1 250px",
              maxWidth: "300px",
            }}
          >
            <h3 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "10px" }}>{tab.label}</h3>
            <p style={{ fontSize: "1rem", color: activeTab === tab.id ? "#000" : "#555" }}>{tab.desc}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "40px", position: "relative", height: "60vh", borderRadius: "24px", overflow: "hidden", background: "#f0f0f0" }}>
         {/* Placeholder for the feature content - representing the UI mockup */}
         <img 
           src={`https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`} 
           alt="Feature mockup" 
           style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.8 }} 
         />
         <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", background: "rgba(0,0,0,0.7)", padding: "20px 40px", borderRadius: "16px", color: "white" }}>
            <h3 style={{ fontSize: "2rem" }}>{tabs.find(t => t.id === activeTab)?.label} in Action</h3>
         </div>
      </div>
    </section>
  );
}

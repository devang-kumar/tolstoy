"use client";

import React from "react";

export default function InteractiveVideo() {
  return (
    <section className="mix-gradient" style={{ padding: "100px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", gap: "60px", alignItems: "center", flexWrap: "wrap" }}>
        
        <div style={{ flex: "1 1 400px" }}>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "20px" }}>
            Shoppable video everywhere.
          </h2>
          <p style={{ fontSize: "1.2rem", color: "#333", marginBottom: "40px", lineHeight: 1.6 }}>
            Turn any video into an interactive, shoppable experience. Boost engagement and sales seamlessly across your site and social channels.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 40px 0", fontSize: "1.1rem" }}>
            <li style={{ marginBottom: "16px", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ color: "#000", fontWeight: "bold" }}>✓</span> Seamless integration
            </li>
            <li style={{ marginBottom: "16px", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ color: "#000", fontWeight: "bold" }}>✓</span> In-video checkout
            </li>
            <li style={{ marginBottom: "16px", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ color: "#000", fontWeight: "bold" }}>✓</span> Advanced analytics
            </li>
          </ul>
          <button className="primary-btn">See how it works</button>
        </div>

        <div style={{ flex: "1 1 400px", display: "flex", justifyContent: "center" }}>
          <div style={{ 
            width: "300px", 
            height: "600px", 
            borderRadius: "30px", 
            overflow: "hidden", 
            boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
            position: "relative",
            border: "8px solid #000"
          }}>
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            >
              <source src="https://videos.pexels.com/video-files/3205917/3205917-uhd_2560_1440_25fps.mp4" type="video/mp4" />
            </video>
            
            {/* Interactive Overlay Mockup */}
            <div className="glass-card" style={{ 
              position: "absolute", 
              bottom: "20px", 
              left: "20px", 
              right: "20px", 
              padding: "15px",
              display: "flex",
              alignItems: "center",
              gap: "10px"
            }}>
              <div style={{ width: "40px", height: "40px", background: "#ddd", borderRadius: "8px" }}></div>
              <div>
                <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "#000" }}>Cool Product Name</div>
                <div style={{ fontSize: "0.8rem", color: "#666" }}>$49.99</div>
              </div>
              <button style={{ marginLeft: "auto", background: "#000", color: "#fff", border: "none", padding: "8px 12px", borderRadius: "20px", fontSize: "0.8rem", cursor: "pointer" }}>Buy</button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

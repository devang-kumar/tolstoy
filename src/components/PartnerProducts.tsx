"use client";

import React from "react";
import Image from "next/image";

export default function PartnerProducts() {
  const products = [
    {
      name: "Grandeapp.com",
      description: "Scale your e-commerce revenue with our advanced partner application. Seamlessly integrate to unlock new growth channels.",
      image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=600",
      tag: "Growth Platform"
    },
    {
      name: "fitADai.com",
      description: "AI-driven ad optimization tailored for modern brands. Maximize your ROAS with intelligent targeting and creative analytics.",
      image: "https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg?auto=compress&cs=tinysrgb&w=600",
      tag: "AI Ad Tech"
    }
  ];

  return (
    <section style={{ padding: "120px 20px", background: "var(--background)", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: "20px", color: "var(--tolstoy-black)" }}>
            Explore Our Partner Ecosystem
          </h2>
          <p style={{ fontSize: "1.25rem", color: "#555", maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}>
            Enhance your commerce stack with our powerful partner products explicitly tailored for growth.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "40px" }}>
          {products.map((product, idx) => (
            <div key={idx} style={{ 
              display: "flex", 
              flexDirection: "column", 
              overflow: "hidden", 
              borderRadius: "32px", 
              background: "var(--tolstoy-gray)",
              border: "1px solid #eaeaea",
              transition: "transform 0.3s ease, box-shadow 0.3s ease" 
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow = "0 30px 60px rgba(0,0,0,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}>
              
              <div style={{ position: "relative", width: "100%", height: "300px" }}>
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill 
                  style={{ objectFit: "cover" }} 
                />
                <div style={{ position: "absolute", top: "20px", left: "20px", background: "#fff", padding: "8px 16px", borderRadius: "100px", fontSize: "0.85rem", fontWeight: 700, color: "var(--tolstoy-black)", boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}>
                  {product.tag}
                </div>
              </div>

              <div style={{ padding: "40px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <h3 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "16px", letterSpacing: "-0.03em", color: "var(--tolstoy-black)" }}>{product.name}</h3>
                <p style={{ color: "#555", lineHeight: 1.6, fontSize: "1.1rem", marginBottom: "32px", flexGrow: 1 }}>
                  {product.description}
                </p>
                <button className="btn-secondary" style={{ alignSelf: "flex-start", padding: "12px 24px", fontSize: "0.95rem" }}>
                  Learn more &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

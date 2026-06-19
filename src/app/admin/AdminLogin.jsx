"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "@/css/admin.css";

const API = process.env.NEXT_PUBLIC_API_URL || "";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${API}/api/login.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (data.status === "success") {
        localStorage.setItem("admin_token", data.csrf_token);
        localStorage.setItem("admin_role", data.role);
        router.push("/admin/dashboard");
      } else {
        setError(data.message || "Login failed");
      }
    } catch {
      setError("Could not connect to the server. Make sure the PHP server is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f7f7f7" }}>
      <div style={{ background: "#fff", padding: "48px 40px", borderRadius: "12px", boxShadow: "0 4px 24px rgba(0,0,0,0.08)", width: "100%", maxWidth: "400px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "8px", color: "#1a1a1a" }}>Webanatomy Admin</h1>
        <p style={{ color: "#888", fontSize: "14px", marginBottom: "32px" }}>Sign in to manage posts</p>

        {error && (
          <div style={{ background: "#fff5f5", border: "1px solid #fed7d7", color: "#c53030", padding: "12px 16px", borderRadius: "8px", marginBottom: "20px", fontSize: "14px" }}>
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="admin-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="admin-input"
          />
          <button type="submit" className="admin-btn admin-btn-primary" disabled={loading} style={{ marginTop: "8px" }}>
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}

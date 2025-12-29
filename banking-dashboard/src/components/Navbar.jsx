import React from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { track } from "../analytics/analytics.js";

export default function Navbar({ onToggleSidebar }) {
  const { logout } = useAuth();

  return (
    <header className="nav">
      <button className="btn" onClick={onToggleSidebar} aria-label="Toggle sidebar">
        ☰
      </button>

      <div className="navTitle">Co-op Style Digital Banking</div>

      <button
        className="btn btnPrimary"
        onClick={() => {
          track("logout_click");
          logout();
        }}
      >
        Logout
      </button>
    </header>
  );
}

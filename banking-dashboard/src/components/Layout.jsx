import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="shell">
      <Navbar onToggleSidebar={() => setSidebarOpen((s) => !s)} />
      <div className="body">
        <Sidebar open={sidebarOpen} />
        <main className="content">{children}</main>
      </div>
    </div>
  );
}

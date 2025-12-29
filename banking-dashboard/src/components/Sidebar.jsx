import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar({ open }) {
  return (
    <aside className={`sidebar ${open ? "open" : ""}`}>
      <nav className="sideNav">
        <NavLink className="sideLink" to="/app/dashboard">
          Dashboard
        </NavLink>
        <NavLink className="sideLink" to="/app/transactions">
          Transactions
        </NavLink>
      </nav>
    </aside>
  );
}

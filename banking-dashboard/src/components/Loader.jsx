import React from "react";

export default function Loader({ label = "Loading..." }) {
  return (
    <div style={{ padding: 16 }}>
      <div style={{ fontWeight: 600 }}>{label}</div>
      <div style={{ opacity: 0.7, marginTop: 6 }}>Please wait.</div>
    </div>
  );
}

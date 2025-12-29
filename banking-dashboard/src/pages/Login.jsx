import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { track } from "../analytics/analytics.js";

export default function Login() {
  const { login } = useAuth();
  const nav = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setError("");

    // simple validation (security basics)
    if (!email.includes("@")) return setError("Enter a valid email.");
    if (password.length < 6) return setError("Password must be at least 6 characters.");

    const result = login(email, password);
    if (!result.ok) return setError(result.message);

    track("login_success");
    nav("/app/dashboard");
  };

  return (
    <div className="authWrap">
      <form className="authCard" onSubmit={onSubmit}>
        <h1 className="h1">Sign in</h1>
        <p className="muted">Demo login (mock). Use any email + password.</p>

        <label className="label">
          Email
          <input className="input" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>

        <label className="label">
          Password
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        {error ? <div className="error">{error}</div> : null}

        <button className="btn btnPrimary" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

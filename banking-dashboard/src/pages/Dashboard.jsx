import React from "react";

export default function Dashboard() {
  // mock values
  const balances = [
    { name: "Current Account", amount: 74250.55 },
    { name: "Savings", amount: 120500.0 },
    { name: "Loan", amount: -250000.0 },
  ];

  return (
    <div>
      <h1 className="h1">Dashboard</h1>
      <p className="muted">Responsive account overview.</p>

      <div className="grid">
        {balances.map((b) => (
          <div key={b.name} className="card">
            <div className="cardTitle">{b.name}</div>
            <div className={`bigAmount ${b.amount >= 0 ? "credit" : "debit"}`}>
              KES {Math.abs(b.amount).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

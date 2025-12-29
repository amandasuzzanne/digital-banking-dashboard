import React from "react";

export default function TransactionCard({ t }) {
  const isCredit = t.type === "credit";
  return (
    <div className="card">
      <div className="cardRow">
        <div>
          <div className="cardTitle">{t.merchant}</div>
          <div className="cardSub">{t.description}</div>
        </div>

        <div className={`amount ${isCredit ? "credit" : "debit"}`}>
          {isCredit ? "+" : "-"} {t.currency} {Math.abs(Number(t.amount)).toLocaleString()}
          <div className="date">{t.date}</div>
        </div>
      </div>
    </div>
  );
}

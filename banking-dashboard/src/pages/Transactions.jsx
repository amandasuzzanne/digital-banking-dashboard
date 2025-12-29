import React, { useEffect, useMemo, useState } from "react";
import Loader from "../components/Loader.jsx";
import TransactionCard from "../components/TransactionCard.jsx";
import { fetchTransactions } from "../services/api.js";
import { track } from "../analytics/analytics.js";

export default function Transactions() {
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [tx, setTx] = useState([]);
  const [query, setQuery] = useState("");
  const [type, setType] = useState("all");

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        setLoading(true);
        setErr("");
        const data = await fetchTransactions();
        if (mounted) setTx(data);
      } catch (e) {
        if (mounted) setErr(e.message || "Something went wrong.");
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    track("transactions_page_view");
    return () => {
      mounted = false;
    };
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return tx.filter((t) => {
      const matchesQ = !q || t.merchant.toLowerCase().includes(q) || t.description.toLowerCase().includes(q);
      const matchesType = type === "all" || t.type === type;
      return matchesQ && matchesType;
    });
  }, [tx, query, type]);

  if (loading) return <Loader label="Fetching transactions..." />;
  if (err) return <div className="error">Error: {err}</div>;

  return (
    <div>
      <h1 className="h1">Transactions</h1>

      <div className="filters">
        <input
          className="input"
          placeholder="Search merchant or description…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <select
          className="input"
          value={type}
          onChange={(e) => {
            setType(e.target.value);
            track("transaction_filter_change", { type: e.target.value });
          }}
        >
          <option value="all">All</option>
          <option value="credit">Credits</option>
          <option value="debit">Debits</option>
        </select>
      </div>

      <div className="list">
        {filtered.map((t) => (
          <TransactionCard key={t.id} t={t} />
        ))}
      </div>
    </div>
  );
}

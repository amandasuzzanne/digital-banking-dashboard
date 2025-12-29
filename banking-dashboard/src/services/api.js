const API_URL = "https://jsonplaceholder.typicode.com";

// We'll treat "posts" as transactions (demo data).
export async function fetchTransactions() {
  const res = await fetch(`${API_URL}/posts?_limit=30`);
  if (!res.ok) throw new Error("Failed to fetch transactions.");
  const data = await res.json();

  // Convert posts to "transaction-like" objects
  return data.map((p, idx) => ({
    id: p.id,
    merchant: p.title.slice(0, 24),
    description: p.body.slice(0, 60),
    amount: ((idx % 2 === 0 ? 1 : -1) * (Math.floor(Math.random() * 4500) + 50)).toFixed(2),
    currency: "KES",
    date: new Date(Date.now() - idx * 86400000).toISOString().slice(0, 10),
    type: idx % 2 === 0 ? "credit" : "debit",
  }));
}

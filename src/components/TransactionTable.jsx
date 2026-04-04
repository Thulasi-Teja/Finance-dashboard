import { useState } from "react";

export default function TransactionTable({ transactions, role, setTransactions }) {
  const [search, setSearch] = useState("");

  const filtered = transactions.filter((t) =>
    t.category.toLowerCase().includes(search.toLowerCase())
  );

  const deleteTx = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  return (
    <div className="mt-6 bg-gray-800 text-white p-4 rounded-xl shadow">
      <input
        type="text"
        placeholder="Search category..."
        className="border p-2 mb-3 w-full"
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="w-full">
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Type</th>
            {role === "admin" && <th>Action</th>}
          </tr>
        </thead>

        <tbody>
          {filtered.map((t) => (
            <tr key={t.id}>
              <td>{t.date}</td>
              <td>₹{t.amount}</td>
              <td>{t.category}</td>
              <td>{t.type}</td>
              {role === "admin" && (
                <td>
                  <button onClick={() => deleteTx(t.id)}>Delete</button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
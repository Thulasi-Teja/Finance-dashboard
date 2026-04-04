import { useState } from "react";
import SummaryCard from "./components/SummaryCard.jsx";
import TransactionTable from "./components/TransactionTable.jsx";
import Charts from "./components/Charts.jsx";
import Insights from "./components/Insights.jsx";
import RoleSwitcher from "./components/RoleSwitcher.jsx";
import { transactionsData } from "./data/mockData.js";

export default function App() {
  const [transactions, setTransactions] = useState(transactionsData);
  const [role, setRole] = useState("viewer");

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  const balance = income - expense;

  return (
    <div className="p-6 bg-gray-400 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Finance Dashboard</h1>

      <RoleSwitcher role={role} setRole={setRole} />

      <div className="grid grid-cols-3 gap-4 mt-4">
        <SummaryCard title="Balance" value={balance} />
        <SummaryCard title="Income" value={income} />
        <SummaryCard title="Expenses" value={expense} />
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="col-span-2">
          <Charts transactions={transactions} />
        </div>
        <Insights transactions={transactions} />
      </div>

      <TransactionTable
        transactions={transactions}
        role={role}
        setTransactions={setTransactions}
      />
    </div>
  );
}
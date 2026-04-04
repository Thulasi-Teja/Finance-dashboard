export default function Insights({ transactions }) {
  const expenseData = transactions.filter((t) => t.type === "expense");

  const categoryTotals = {};

  expenseData.forEach((t) => {
    categoryTotals[t.category] =
      (categoryTotals[t.category] || 0) + t.amount;
  });

  const topCategory = Object.keys(categoryTotals)[0] || "No Data";

  return (
    <div className="bg-gray-800 text-white p-4 rounded-xl shadow">
      <h3>Insights</h3>
      <p>Top Spending: {topCategory}</p>
    </div>
  );
}
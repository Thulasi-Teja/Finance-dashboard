import { PieChart, Pie, Cell } from "recharts";

export default function Charts({ transactions }) {
  const expenseData = transactions.filter((t) => t.type === "expense");

  const pieData = Object.values(
    expenseData.reduce((acc, curr) => {
      acc[curr.category] = acc[curr.category] || {
        name: curr.category,
        value: 0,
      };
      acc[curr.category].value += curr.amount;
      return acc;
    }, {})
  );

  return (
    <div className="bg-gray-800 text-white p-4 rounded-xl shadow">
      <h2>Expense Chart</h2>
      <PieChart width={300} height={200}>
        <Pie data={pieData} dataKey="value" outerRadius={80}>
          {pieData.map((_, i) => (
            <Cell key={i} />
          ))}
        </Pie>
      </PieChart>
    </div>
  ); 
}
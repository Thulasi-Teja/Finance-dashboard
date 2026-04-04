export default function SummaryCard({ title, value }) {
  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow">
      <p className="text-white">{title}</p>
      <h2 className="text-xl text-white font-bold">₹{value}</h2>
    </div>
  );
}
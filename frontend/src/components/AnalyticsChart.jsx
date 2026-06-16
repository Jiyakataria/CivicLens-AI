import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

function AnalyticsChart() {
  const data = [
    { name: "Road", value: 40 },
    { name: "Water", value: 25 },
    { name: "Garbage", value: 20 },
    { name: "Street Lights", value: 15 },
  ];

  const colors = [
    "#3b82f6",
    "#10b981",
    "#f59e0b",
    "#ef4444",
  ];

  return (
    <div className="bg-slate-800 p-6 rounded-3xl mt-8">
      <h2 className="text-2xl font-bold mb-6 text-white">
        Complaint Distribution
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={colors[index]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AnalyticsChart;
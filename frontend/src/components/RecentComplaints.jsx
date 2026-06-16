function RecentComplaints() {
  const complaints = [
    {
      id: 1,
      complaint: "Large pothole near city mall",
      status: "Pending",
    },
    {
      id: 2,
      complaint: "Garbage collection delayed",
      status: "Resolved",
    },
    {
      id: 3,
      complaint: "Street light not working",
      status: "In Progress",
    },
  ];

  return (
    <div className="bg-slate-800 p-6 rounded-3xl mt-8 text-white">
      <h2 className="text-2xl font-bold mb-6">
        Recent Complaints
      </h2>

      {complaints.map((item) => (
        <div
          key={item.id}
          className="border-b border-slate-700 py-4"
        >
          <p className="font-semibold">
            {item.complaint}
          </p>

          <p className="text-gray-400 text-sm">
            {item.status}
          </p>
        </div>
      ))}
    </div>
  );
}

export default RecentComplaints;
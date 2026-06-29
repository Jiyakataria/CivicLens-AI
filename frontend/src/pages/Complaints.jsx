import { useState, useEffect } from "react";
// import { getComplaints } from "../services/complaintService";
import { getComplaints } from "../services/complaintService";

function Complaints() {
  const [complaints, setComplaints] = useState([
    {
      id: 1,
      complaint: "Garbage overflowing near market",
      location: "Kothrud",
      status: "OPEN",
    },
    {
      id: 2,
      complaint: "Street lights not working",
      location: "Baner",
      status: "OPEN",
    },
    {
      id: 3,
      complaint: "Large potholes on main road",
      location: "Hadapsar",
      status: "IN_PROGRESS",
    },
  ]);

  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");

    useEffect(() => {
  const fetchComplaints = async () => {
    try {
      setLoading(true);

      const data = await getComplaints();

      setComplaints(data);
    } catch (error) {
      console.error("Failed to fetch complaints:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchComplaints();
}, []);
 

  const filteredComplaints = complaints.filter((item) => {
    const matchesSearch =
      item.complaint
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      item.location
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "ALL" ||
      item.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-slate-900 text-white p-10">

      <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">

        <h1 className="text-4xl font-bold">
          Complaints
        </h1>

        <div className="bg-blue-600 px-4 py-2 rounded-xl h-fit">
          Total: {filteredComplaints.length}
        </div>

      </div>

      <div className="bg-slate-800 rounded-3xl p-6 mb-6">

        <div className="flex flex-col md:flex-row gap-4">

          <input
            type="text"
            placeholder="🔍 Search complaints..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 bg-slate-700 p-3 rounded-xl outline-none"
          />

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-slate-700 p-3 rounded-xl outline-none"
          >
            <option value="ALL">All Status</option>
            <option value="OPEN">Open</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="RESOLVED">Resolved</option>
          </select>

        </div>

      </div>

      <div className="bg-slate-800 rounded-3xl p-6 overflow-x-auto">

        {loading ? (
          <div className="text-center py-10">
            Loading complaints...
          </div>
        ) : (
          <table className="w-full">

            <thead>
              <tr className="border-b border-slate-700 text-gray-400">
                <th className="text-left py-4">Complaint</th>
                <th className="text-left py-4">Location</th>
                <th className="text-left py-4">Status</th>
              </tr>
            </thead>

            <tbody>

              {filteredComplaints.map((item) => (
                <tr
                  key={item._id || item.id}
                  className="border-b border-slate-700 hover:bg-slate-700/30 transition"
                >
                  <td className="py-4">
                    {item.complaint}
                  </td>

                  <td className="py-4">
                    {item.location}
                  </td>

                  <td className="py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        item.status === "OPEN"
                          ? "bg-red-500/20 text-red-400"
                          : item.status === "IN_PROGRESS"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-green-500/20 text-green-400"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}

            </tbody>

          </table>
        )}

      </div>

    </div>
  );
}

export default Complaints;
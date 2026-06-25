import { useState, useEffect } from "react";

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

  useEffect(() => {
    // Backend integration will go here later

    /*
    Example:

    const fetchComplaints = async () => {
      try {
        setLoading(true);

        const response = await getComplaints();

        setComplaints(response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchComplaints();
    */
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white p-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">
          Complaints
        </h1>

        <span className="bg-blue-600 px-4 py-2 rounded-xl">
          Total: {complaints.length}
        </span>
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
              {complaints.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-slate-700 hover:bg-slate-700/30 transition"
                >
                  <td className="py-4">{item.complaint}</td>

                  <td className="py-4">{item.location}</td>

                  <td className="py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        item.status === "OPEN"
                          ? "bg-red-500/20 text-red-400"
                          : "bg-yellow-500/20 text-yellow-400"
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
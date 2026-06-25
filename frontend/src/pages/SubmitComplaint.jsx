import { useState } from "react";
import { createComplaint } from "../services/complaintService";

function SubmitComplaint() {
  const [complaint, setComplaint] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createComplaint({
        complaint,
        location,
      });

      setMessage("Complaint submitted successfully!");

      setComplaint("");
      setLocation("");
    } catch (error) {
      console.error(error);
      setMessage("Failed to submit complaint");
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-10">
      <h1 className="text-4xl font-bold mb-8">
        Submit Complaint
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 p-8 rounded-3xl max-w-3xl"
      >
        <input
          type="text"
          placeholder="Complaint"
          value={complaint}
          onChange={(e) => setComplaint(e.target.value)}
          className="w-full p-4 rounded-xl bg-slate-700 mb-4"
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-4 rounded-xl bg-slate-700 mb-4"
        />

        <button
          type="submit"
          className="bg-blue-600 px-6 py-3 rounded-xl"
        >
          Submit Complaint
        </button>

        {message && (
          <p className="mt-4 text-green-400">
            {message}
          </p>
        )}
      </form>
    </div>
  );
}

export default SubmitComplaint;
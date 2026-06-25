import { useState } from "react";

function SubmitComplaint() {
  const [formData, setFormData] = useState({
    complaint: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Complaint Submitted Successfully!");
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

        <div className="mb-6">
          <label className="block mb-2">
            Complaint
          </label>

          <textarea
            name="complaint"
            rows="5"
            value={formData.complaint}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-slate-700"
            placeholder="Describe the issue..."
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2">
            Location
          </label>

          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-slate-700"
            placeholder="Enter location"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-700"
        >
          Submit Complaint
        </button>

      </form>
    </div>
  );
}

export default SubmitComplaint;
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const mockData = [
  {
    name: "Abdullah",
    designation: "Software Engineer",
    grossSalary: "60,000",
    netPay: "54,000",
    month: "April",
    year: "2025",
  },
  {
    name: "Faisal",
    designation: "Web Developer",
    grossSalary: "45,000",
    netPay: "40,000",
    month: "March",
    year: "2025",
  },
];

const TaxResult = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const entry = mockData[Number(id)];

  if (!entry) {
    return (
      <div className="p-4 text-red-600 font-bold">
        ❌ Entry not found.{" "}
        <button className="underline" onClick={() => navigate(-1)}>
          Go back
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Form 16 Details</h2>
      <div className="space-y-2 text-lg">
        <p>
          <strong>Name:</strong> {entry.name}
        </p>
        <p>
          <strong>Designation:</strong> {entry.designation}
        </p>
        <p>
          <strong>Gross Salary:</strong> ₹{entry.grossSalary}
        </p>
        <p>
          <strong>Net Pay:</strong> ₹{entry.netPay}
        </p>
        <p>
          <strong>Month:</strong> {entry.month}
        </p>
        <p>
          <strong>Year:</strong> {entry.year}
        </p>
      </div>

      <button
        onClick={() => navigate("/form16-view")}
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        ← Back to List
      </button>
    </div>
  );
};

export default TaxResult;

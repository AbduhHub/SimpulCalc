import React from "react";
import { useNavigate } from "react-router-dom";

type Form16Data = {
  name: string;
  designation: string;
  grossSalary: string;
  netPay: string;
  month: string;
  year: string;
};

const mockData: Form16Data[] = [
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

const Form16View = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Saved Form 16 Entries</h1>
      <ul className="space-y-4">
        {mockData.map((entry, index) => (
          <li
            key={index}
            className="border p-4 rounded shadow-sm flex justify-between items-center"
          >
            <div>
              <p>
                <strong>{entry.name}</strong> - {entry.designation}
              </p>
              <p>
                Net Pay: ₹{entry.netPay} (for {entry.month}, {entry.year})
              </p>
            </div>
            <button
              onClick={() => navigate(`/tax-result/${index}`)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              View
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Form16View;

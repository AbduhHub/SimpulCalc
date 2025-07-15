import React, { useState } from "react";
import Button from "../components/ui/Button";

const Form16Input = () => {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    payScale: "",
    basicPay: "",
    daPercent: "",
    hraPercent: "",
    grossSalary: "",
    deductions: "",
    netPay: "",
    month: "",
    year: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCalculate = () => {
    const basic = parseFloat(formData.basicPay);
    const da = (basic * parseFloat(formData.daPercent)) / 100;
    const hra = (basic * parseFloat(formData.hraPercent)) / 100;
    const gross = basic + da + hra;
    const deductions = parseFloat(formData.deductions);
    const net = gross - deductions;

    setFormData({
      ...formData,
      grossSalary: gross.toFixed(2),
      netPay: net.toFixed(2),
    });
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Form-16 Input</h1>
      <div className="grid grid-cols-2 gap-4">
        <input
          name="name"
          onChange={handleChange}
          value={formData.name}
          placeholder="Employee Name"
          className="input"
        />
        <input
          name="designation"
          onChange={handleChange}
          value={formData.designation}
          placeholder="Designation"
          className="input"
        />
        <input
          name="payScale"
          onChange={handleChange}
          value={formData.payScale}
          placeholder="Pay Scale"
          className="input"
        />
        <input
          name="basicPay"
          onChange={handleChange}
          value={formData.basicPay}
          placeholder="Basic Pay"
          className="input"
        />
        <input
          name="daPercent"
          onChange={handleChange}
          value={formData.daPercent}
          placeholder="DA %"
          className="input"
        />
        <input
          name="hraPercent"
          onChange={handleChange}
          value={formData.hraPercent}
          placeholder="HRA %"
          className="input"
        />
        <input
          name="deductions"
          onChange={handleChange}
          value={formData.deductions}
          placeholder="Deductions"
          className="input"
        />
        <input
          name="month"
          onChange={handleChange}
          value={formData.month}
          placeholder="Month"
          className="input"
        />
        <input
          name="year"
          onChange={handleChange}
          value={formData.year}
          placeholder="Year"
          className="input"
        />
        <input
          readOnly
          value={formData.grossSalary}
          placeholder="Gross Salary"
          className="input bg-gray-100"
        />
        <input
          readOnly
          value={formData.netPay}
          placeholder="Net Pay"
          className="input bg-gray-100"
        />
      </div>
      <Button className="mt-4" onClick={handleCalculate}>
        Calculate
      </Button>
    </div>
  );
};

export default Form16Input;

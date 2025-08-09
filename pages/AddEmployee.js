import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

function AddEmployee() {
  const [form, setForm] = useState({ name: "", department: "", salary: "", attendanceDays: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  await api.post("/employees", form);
  navigate("/");
};


  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" className="form-control mb-2" onChange={handleChange} required />
        <input type="text" name="department" placeholder="Department" className="form-control mb-2" onChange={handleChange} required />
        <input type="number" name="salary" placeholder="Salary" className="form-control mb-2" onChange={handleChange} required />
        <input type="number" name="attendanceDays" placeholder="Attendance Days" className="form-control mb-2" onChange={handleChange} required />
        <button className="btn btn-success">Add</button>
      </form>
    </div>
  );
}

export default AddEmployee;
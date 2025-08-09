import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api";

function EditEmployee() {
  const [form, setForm] = useState({
    name: "",
    department: "",
    salary: "",
    attendanceDays: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const res = await api.get(`/${id}`);
        setForm(res.data);
      } catch (error) {
        console.error("Failed to fetch employee:", error);
      }
    };

    fetchEmployee();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`employees/${id}`, form); 
      navigate("/");
    } catch (error) {
      console.error("Failed to update employee:", error);
    }
  };

  return (
    <div>
      <h2>Edit Employee</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          placeholder="Name"
          className="form-control mb-2"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="department"
          value={form.department}
          placeholder="Department"
          className="form-control mb-2"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="salary"
          value={form.salary}
          placeholder="Salary"
          className="form-control mb-2"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="attendanceDays"
          value={form.attendanceDays}
          placeholder="Attendance Days"
          className="form-control mb-2"
          onChange={handleChange}
          required
        />
        <button className="btn btn-primary">Update</button>
      </form>
    </div>
  );
}

export default EditEmployee;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    const res = await api.get("/employees");
    setEmployees(res.data);
  };

  const deleteEmployee = async (id) => {
    await api.delete(`/employees/reset`);
    fetchEmployees();
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div>
      <h2>Employee List</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Attendance Days</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
              <td>{emp.salary}</td>
              <td>{emp.attendanceDays}</td>
              <td>
                <Link to={`/edit/${emp.id}`} className="btn btn-primary btn-sm me-2">Edit</Link>
                <button onClick={() => deleteEmployee(emp.id)} className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
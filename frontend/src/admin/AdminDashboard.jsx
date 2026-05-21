import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [form, setForm] = useState({});
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);

  // FETCH DATA
  const fetchData = () => {
    fetch("http://localhost:5000/api/results")
      .then(res => res.json())
      .then(setData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // HANDLE CHANGE
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // SUBMIT
  const handleSubmit = async () => {
    const url = editId
      ? `http://localhost:5000/api/results/${editId}`
      : "http://localhost:5000/api/results";

    const method = editId ? "PUT" : "POST";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setForm({});
    setEditId(null);
    fetchData();
  };

  // EDIT
  const handleEdit = (item) => {
    setForm(item);
    setEditId(item._id);
  };

  // DELETE
  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/results/${id}`, {
      method: "DELETE",
    });
    fetchData();
  };

  // EXCEL UPLOAD
  const handleFile = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    await fetch("http://localhost:5000/api/results/upload", {
      method: "POST",
      body: formData,
    });

    fetchData();
  };

  return (
    <div className="p-6">

      <h2 className="text-2xl mb-4 font-bold">Admin Dashboard</h2>

      {/* FORM */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        {["year", "class", "appeared", "passed", "first", "second", "third", "suppl", "fail", "percent"].map(field => (
          <input
            key={field}
            name={field}
            placeholder={field}
            value={form[field] || ""}
            onChange={handleChange}
            className="border p-2"
          />
        ))}
      </div>

      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 mb-4"
      >
        {editId ? "Update" : "Add"}
      </button>

      {/* EXCEL UPLOAD */}
      <input type="file" onChange={handleFile} className="mb-4" />

      {/* TABLE */}
      <table className="w-full border text-sm">
        <thead>
          <tr className="bg-gray-300">
            <th>Year</th><th>Class</th><th>Appeared</th>
            <th>Passed</th><th>%</th><th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map(item => (
            <tr key={item._id} className="border">
              <td>{item.year}</td>
              <td>{item.class}</td>
              <td>{item.appeared}</td>
              <td>{item.passed}</td>
              <td>{item.percent}</td>
              <td>
                <button onClick={() => handleEdit(item)}>Edit</button>
                <button onClick={() => handleDelete(item._id)} className="ml-2 text-red-500">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
};

export default AdminDashboard;
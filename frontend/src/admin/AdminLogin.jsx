import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.token) {
      localStorage.setItem("token", data.token);
      navigate("/admin/dashboard");
    } else {
      alert("Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">

      <div className="bg-white p-6 rounded shadow w-[300px]">

        <h2 className="text-xl mb-4">Admin Login</h2>

        <input
          placeholder="Username"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          className="border p-2 w-full mb-2"
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="border p-2 w-full mb-4"
        />

        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white w-full py-2"
        >
          Login
        </button>

      </div>

    </div>
  );
};

export default AdminLogin;
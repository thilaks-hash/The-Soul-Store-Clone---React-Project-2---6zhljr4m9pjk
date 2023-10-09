import React, { useState } from "react";
import axios from "axios";
import { projectId } from "../utilities/constants";
import { useSelector } from "react-redux";

const DeleteAccount = () => {
  const userToken = useSelector((state) => state.auth.user);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const [formData, setFormData] = useState({
    name: "test6969",
    email: "test6969@gmail.com",
    passwordCurrent: "12345",
    password: "1234567890",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // try {
    const response = await axios.patch(
      "https://academics.newtonschool.co/api/v1/user/deleteMe",
      formData,
      {
        headers: {
          projectId: projectId,
          Authorization: `Bearer ${userToken}`,
        },
      }
    );

    if (response.status === 200) {
      setMessage("Password updated successfully.");
    }
    // } catch (error) {
    //   setMessage("Password update failed. Please check your credentials.");
    // }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Delete Account</h2>
      <div onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-red-400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-red-400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Current Password:
          </label>

          <input
            type={passwordVisible ? "text" : "password"}
            value={formData.passwordCurrent}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-red-400"
          />
          <button
            onClick={togglePasswordVisibility}
            className="text-slate-500 text-sm"
          >
            {passwordVisible ? "Hide" : "Show"} Password
          </button>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            New Password:
          </label>
          <input
            type={passwordVisible ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-red-400"
          />
          <button
            onClick={togglePasswordVisibility}
            className="text-slate-500 text-sm"
          >
            {passwordVisible ? "Hide" : "Show"} Password
          </button>
        </div>
        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none"
        >
          Delete account
        </button>
      </div>
      {message && <p className="mt-4 text-green-500">{message}</p>}
    </div>
  );
};

export default DeleteAccount;

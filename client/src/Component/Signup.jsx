import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function Signup() {
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    phone: "",
    address: "",
    course: "",
    gender: "",
  });

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    for (let key in value) {
      if (!value[key]) {
        return toast.error(
          `${key.charAt(0).toUpperCase() + key.slice(1)} is required`
        );
      }
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/register",
        value
      );

      if (response.status === 201) {
        toast.success(response.data.message);
        setValue({
          name: "",
          email: "",
          password: "",
          age: "",
          phone: "",
          address: "",
          course: "",
          gender: "",
        });
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || "Error in registering");
      } else {
        toast.error("Server is not responding");
      }
    }
  };

  return (
    <div className="container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={value.name}
          onChange={handleChange}
        />
        <input
          type="email"
          autoComplete="new-email"
          placeholder="Email"
          name="email"
          value={value.email}
          onChange={handleChange}
        />

        <input
          type="password"
          placeholder="Password"
          autoComplete="new-password"
          name="password"
          value={value.password}
          onChange={handleChange}
        />

        <input
          type="number"
          placeholder="Age"
          name="age"
          value={value.age}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Phone Number"
          name="phone"
          value={value.phone}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Address"
          name="address"
          value={value.address}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Course"
          name="course"
          value={value.course}
          onChange={handleChange}
        />

        <select
          style={{
            padding: "10px",
            borderRadius: "10px",
            height: "50px",
            border: "none",
            outline: "none",
          }} // Correct syntax
          name="gender"
          value={value.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <div
          style={{
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          <button
            style={{
              cursor: "pointer",
            }}
            class={{ textAlign: "center" }}
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

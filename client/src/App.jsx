import React from "react";
import Signup from "./Component/Signup";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";

export default function App() {
  return (
    <>
      <Signup />
      <ToastContainer />
    </>
  );
}

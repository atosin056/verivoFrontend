import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Offers from "./pages/Offers";
import "./App.css";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth" element={<Register />} />
      <Route path="/app" element={<Dashboard />} />
      <Route path="/app/offers" element={<Offers />} />
    </Routes>
  );
}

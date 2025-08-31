import React from "react";
import { Navigate } from "react-router-dom";

// fake auth simulation
const isAuthenticated = false; // change to true to simulate login

export default function ProtectedRoute({ children }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

import { Navigate } from "react-router-dom";
import { useData } from "../Context/DataContext";

export default function ProtectedRoute({ children }) {
  const { user } = useData();
  return user ? children : <Navigate to="/login" replace />;
}


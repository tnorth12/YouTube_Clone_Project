import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const [user] = useAuth();
  return user ? children : <Navigate to="/login" />;
  return user ? children : <Navigate to="/search" />;
};

export default PrivateRoute;

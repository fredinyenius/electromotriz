import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const AuthValidation = () => {

  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (Object.keys(user).length <= 0) {
      navigate('/login');
    }
  }, [user]);

  return (<Outlet />);
}

export default AuthValidation;
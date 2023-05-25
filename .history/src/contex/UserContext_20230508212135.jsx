import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('ad-user')) || {});

  const createUser = async (email, password) => {
    try {
      setLoading(true);
      const response = await createUserWithEmailAndPassword(auth, email, password);
      setUser(response);
      localStorage.setItem('ad-user', JSON.stringify(response));
      setError({});
      navigate('/login');
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const readUser = async (email, password) => {
    try {
      setLoading(true);
      const response = await signInWithEmailAndPassword(auth, email, password);
      setUser(response);
      localStorage.setItem('ad-user', JSON.stringify(response));
      setError({});
      navigate('/');
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        loading,
        error,
        user,
        setUser,
        createUser,
        readUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
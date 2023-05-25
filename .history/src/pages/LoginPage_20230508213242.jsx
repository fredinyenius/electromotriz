import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const LoginPage = () => {
  const navigate = useNavigate();
  const { loading, error, user, readUser } = useAuth();

  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });

  const { email, password } = loginForm;

  const handleChangeLoginForm = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitReadUser = async (e) => {
    e.preventDefault();
    await readUser(email, password);
  };

  useEffect(() => {
    console.log(user);
    if (Object.keys(user).length) {
      navigate('/');
    }
  }, [user]);

  return (
    <>
      <h1>LoginPage</h1>
      <form
        onSubmit={handleSubmitReadUser}
      >
        <input
          type="email"
          name="email"
          placeholder="Correo"
          value={email}
          onChange={handleChangeLoginForm}
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={password}
          onChange={handleChangeLoginForm}
        />
        <br />
        <br />
        <input type="submit" value="Iniciar sesión" />
      </form>
      <br />
      <Link to="/register">Crear cuenta</Link>
      <br />
      <br />
      {loading && <span>Cargando...</span>}
      <br />
      <br />
      {error && <span>{error.code}</span>}
    </>
  );
};

export default LoginPage;

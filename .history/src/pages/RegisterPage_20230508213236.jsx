import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RegisterPage = () => {

  const navigate = useNavigate();

  const { loading, error, user, createUser } = useAuth();

  const [registrationForm, setRegistrationForm] = useState({
    email: '',
    password: ''
  });

  const { email, password } = registrationForm;

  const handleChangeRegistrationForm = (e) => {
    setRegistrationForm({
      ...registrationForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitCreateUser = async (e) => {
    e.preventDefault();
    await createUser(email, password);
  };

  useEffect(() => {
    console.log(user);
    if (Object.keys(user).length) {
      navigate('/');
    }
  }, [user]);

  return (
    <>
      <h1>RegisterPage</h1>
      <form
        onSubmit={handleSubmitCreateUser}
      >
        <input
          type="email"
          name="email"
          placeholder="Correo"
          value={email}
          onChange={handleChangeRegistrationForm}
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={password}
          onChange={handleChangeRegistrationForm}
        />
        <br />
        <br />
        <input type="submit" value="Registrar" />
      </form>
      <br />
      <Link to="/login">Iniciar sesión</Link>
      {loading && <span>Cargando...</span>}
      {error && <span>{error.code}</span>}
    </>
  );
};

export default RegisterPage;
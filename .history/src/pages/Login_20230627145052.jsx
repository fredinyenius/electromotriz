import { useState } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";

const initialState = { email: "", password: "" };

const LoginPage = () => {
  const [formState, setFormState] = useState(initialState);
  const updateState = (value, attrib) => {
    setFormState({
      ...formState,
      [attrib]: value,
    });
  };
  const reset = () => {
    setFormState(initialState);
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const payload = {
      correo: formState.email,
      password: formState.password,
    };
    try {
      const { data } = await axios.post("https://backend-senaty-production.up.railway.app/login", payload);
      const decodedData = jwtDecode(data.content);
      console.log(decodedData)
      //TODO: redirects
      reset();
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <div className="login-wrapper">
        <form className="form" onSubmit={onSubmitHandler}>
          <div className="form-group">
            <label className="label">Email address</label>
            <input
              type="email"
              className="input input--block"
              placeholder="Ingresa email"
              value={formState.email}
              onChange={(e) => updateState(e.target.value, "email")}
            />
          </div>
          <div className="form-group">
            <label className="label">Password</label>
            <input
              type="password"
              className="input input--block"
              placeholder="Password"
              value={formState.password}
              onChange={(e) => updateState(e.target.value, "password")}
            />
          </div>
          <button type="submit" className="button button--primary">
            Ingresar
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;

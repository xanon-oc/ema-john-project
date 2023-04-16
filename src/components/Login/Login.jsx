import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
const Login = () => {
  const [show, setShow] = useState(false);

  const [error, setError] = useState("");
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const from = location.state?.from?.pathname || "/";
  console.log(from);

  const handleLogIn = (e) => {
    setError("");
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="form-container">
      <h3 className="form-title">Login</h3>
      <form onSubmit={handleLogIn}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type={show ? "text" : "password"} name="password" required />
          <p className="show" onClick={() => setShow(!show)}>
            <small>
              {show ? <span>Hide Password</span> : <span>Show Password</span>}
            </small>
          </p>
        </div>
        <p className="error-title">{error}</p>
        <input className="btn-submit" type="submit" value="Login" />
      </form>
      <p className="p-title">
        <small>
          New to Ema-john?{" "}
          <Link className="link-title" to="/signUp">
            Create New Account?
          </Link>
        </small>
      </p>
    </div>
  );
};

export default Login;

import { useDispatch } from "react-redux";
import classes from "./Auth.module.css";
import { authActions } from "../features/authSlice";
import { useState } from "react";

const Auth = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onFormSubmit(evt) {
    evt.preventDefault();
    setEmail("");
    setPassword("");
    dispatch(authActions.login());
  }
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={onFormSubmit}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              onChange={(evt) => setEmail(evt.target.value)}
              value={email}
              type="email"
              id="email"
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              onChange={(evt) => setPassword(evt.target.value)}
              value={password}
              type="password"
              id="password"
            />
          </div>
          <button onClick={onFormSubmit}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;

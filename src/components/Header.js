import { useDispatch, useSelector } from "react-redux";
import classes from "./Header.module.css";
import { authActions } from "../features/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const authStatus = useSelector((store) => store.auth.isAuthenticated);

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href="/">My Products</a>
          </li>
          <li>
            <a href="/">My Sales</a>
          </li>
          <li>
            {authStatus ? (
              <button onClick={() => dispatch(authActions.logout())}>
                Logout
              </button>
            ) : (
              <button onClick={() => dispatch(authActions.login())}>
                LogIn
              </button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

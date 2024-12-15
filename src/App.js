import { useSelector } from "react-redux";
import Auth from "./components/Auth";
import Counter from "./components/Counter";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";

function App() {
  const authStatus = useSelector((state) => state.auth.isAuthenticated);
    //const state = useSelector((state) => state);
    //console.log("State:", state);
  return (
    <>
      <Header />
      {authStatus ? <UserProfile /> : <Auth />}

      <Counter />
    </>
  );
}

export default App;

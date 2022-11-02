import Login from "./components/Login/Login";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes["login-screen"]}>
      <Login />
    </div>
  );
}

export default App;

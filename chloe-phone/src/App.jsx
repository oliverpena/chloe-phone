import { Fragment } from "react";
import Login from "./components/Login";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "./App.css";

function App() {
  return (
    <Fragment>
      <Login />
    </Fragment>
  );
}

export default App;

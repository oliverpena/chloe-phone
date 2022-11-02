import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Card } from "primereact/card";
import { Fragment, useRef } from "react";
import classes from "./Login.module.css";
const Login = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const loginHandler = (event) => {
    event.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    if (!username || !password) {
      console.log("empty username or password");
      return;
    }
  };
  return (
    <Card>
      <form className={classes["login-form"]}>
        <div>Chloe Phone</div>
        <div className={classes.fields}>
          <div>Email</div>
          <InputText id="username" type="email" ref={usernameRef} />
        </div>
        <div className={classes.fields}>
          <div>Password</div>
          <InputText id="password" type="password" ref={passwordRef} />
        </div>
        <Button
          className={classes["login-button"]}
          label="Login"
          onClick={loginHandler}
        />
        <p className={classes["copy-right"]}>Copyright © Olincho 2022</p>
      </form>
    </Card>
  );
};

export default Login;

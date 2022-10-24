import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Card } from "primereact/card";
import { Fragment, useRef } from "react";
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
    <Fragment>
      <form className="login-form">
        <Card>
          <span>
            <label>Email</label>
            <InputText id="username" type="email" ref={usernameRef} />
          </span>
          <span>
            <label>Password</label>
            <InputText id="password" type="password" ref={passwordRef} />
          </span>
          <Button label="Login" onClick={loginHandler} />
        </Card>
      </form>
    </Fragment>
  );
};

export default Login;

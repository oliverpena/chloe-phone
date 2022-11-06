import classes from "./Softphone.module.css";
import Dialpad from "./Dialpad/Dialpad";
import { useState } from "react";
const Softphone = () => {
  const [softphoneInput, setSoftphoneInput] = useState("");
  const onDialpadClick = (numberClicked) => {
    setSoftphoneInput((prevState) => prevState + numberClicked);
  };
  return (
    <section>
      <div className={classes.status}>
        <i></i>
        <label>Status</label>
      </div>
      <input
        className={classes.input}
        placeholder="Phone to Dial"
        value={softphoneInput}
      />
      <Dialpad onDialpadClick={onDialpadClick} />
    </section>
  );
};

export default Softphone;

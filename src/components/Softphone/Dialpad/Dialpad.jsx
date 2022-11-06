import classes from "./Dialpad.module.css";
const Dialpad = (props) => {
  const onClickHandler = (e) => {
    return props.onDialpadClick(e.target.value);
  };
  return (
    <div className={classes.dialpad}>
      <div className={classes.row}>
        <div className={classes.dialkey} value="1" onClick={onClickHandler}>
          <div className={classes.number}>1</div>
        </div>
        <div className={classes.dialkey}>
          <div className={classes.number} value="2" onClick={onClickHandler}>
            2
          </div>
          <div className={classes.letters}>ABC</div>
        </div>
        <div className={classes.dialkey}>
          <div value="3" onClick={onClickHandler}>
            3
          </div>
          <div className={classes.letters}>DEF</div>
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.number} value="4" onClick={onClickHandler}>
          4<div className={classes.letters}>GHI</div>
        </div>
        <div className={classes.number} value="5" onClick={onClickHandler}>
          5<div className={classes.letters}>JKL</div>
        </div>
        <div className={classes.number} value="6" onClick={onClickHandler}>
          6<div className={classes.letters}>MNO</div>
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.number} value="7" onClick={onClickHandler}>
          7<div className={classes.letters}>PQRS</div>
        </div>
        <div className={classes.number} value="8" onClick={onClickHandler}>
          8<div className={classes.letters}>TUV</div>
        </div>
        <div className={classes.number} value="9" onClick={onClickHandler}>
          9<div className={classes.letters}>WXYZ</div>
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.number} value="*" onClick={onClickHandler}>
          *
        </div>
        <div className={classes.number} value="0" onClick={onClickHandler}>
          0
        </div>
        <div className={classes.number} value="#" onClick={onClickHandler}>
          #
        </div>
      </div>
    </div>
  );
};

export default Dialpad;

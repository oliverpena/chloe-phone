import Softphone from "../Softphone/Softphone";
import classes from "./Dashboard.module.css";
const Dashboard = () => {
  return (
    <div className={classes.dashboard}>
      <Softphone />
    </div>
  );
};
export default Dashboard;

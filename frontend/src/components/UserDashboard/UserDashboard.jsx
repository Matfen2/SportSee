import Heal from "../Heal/Heal";
import Time from "../Time/Time";
import Score from "../Score/Score";
import Graph from "../Graph/Graph";
import Activity from "../Activity/Activity";
import Present from "../Present/Present";
import "./UserDashboard.scss";

function UserDashboard() {
  return (
    <div className="user-dashboard">
      <Present />

      <div className="dashboard-main">
        <div className="dashboard-left">
          <Activity />
          <div className="dashboard-bottom">
            <Time />
            <Graph />
            <Score />
          </div>
        </div>
        <div className="dashboard-right">
          <Heal />
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;

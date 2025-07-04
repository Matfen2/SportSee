
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
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;

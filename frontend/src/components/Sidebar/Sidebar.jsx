import "./Sidebar.scss";

import yoga from '../../assets/yoga.png';
import swim from '../../assets/swimming.png';
import cycle from '../../assets/cycling.png';
import musculation from '../../assets/musculation.png'; 

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><a href="#"><img src={yoga} alt="Yoga" /></a></li>
          <li><a href="#"><img src={swim} alt="Natation" /></a></li>
          <li><a href="#"><img src={cycle} alt="Vélo" /></a></li>
          <li><a href="#"><img src={musculation} alt="Musculation" /></a></li>
        </ul>
      </nav>
      <div className="copyright">
        <p>Copyright, SportSee 2020</p>
      </div>
    </aside>
  );
}

export default Sidebar;

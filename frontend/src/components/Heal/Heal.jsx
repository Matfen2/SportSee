import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../../../../backend/app/services.js";

import energy from "../../assets/energy.svg";
import chicken from "../../assets/chicken.svg";
import apple from "../../assets/apple.svg";
import cheeseburger from "../../assets/cheeseburger.svg";

import "./Heal.scss";

function Heal() {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getUserById(id);
        setUserData(data.keyData);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [id]);

  if (!userData) return null;

  return (
    <div className="heal">
      <div className="heal-card">
        <div className="logo" style={{ backgroundColor: "rgba(255, 0, 0, 0.2)" }}>
          <img src={energy} alt="Calories" />
        </div>
        <div>
          <h3>{userData.calorieCount}kCal</h3>
          <p>Calories</p>
        </div>
      </div>

      <div className="heal-card">
        <div className="logo" style={{ backgroundColor: "rgba(74, 184, 255, 0.2)" }}>
          <img src={chicken} alt="Protéines" />
        </div>
        <div>
          <h3>{userData.proteinCount}g</h3>
          <p>Protéines</p>
        </div>
      </div>

      <div className="heal-card">
        <div className="logo" style={{ backgroundColor: "rgba(249, 206, 35, 0.2)" }}>
          <img src={apple} alt="Glucides" />
        </div>
        <div>
          <h3>{userData.carbohydrateCount}g</h3>
          <p>Glucides</p>
        </div>
      </div>

      <div className="heal-card">
        <div className="logo" style={{ backgroundColor: "rgba(253, 81, 129, 0.2)" }}>
          <img src={cheeseburger} alt="Lipides" />
        </div>
        <div>
          <h3>{userData.lipidCount}g</h3>
          <p>Lipides</p>
        </div>
      </div>
    </div>
  );
}

export default Heal;

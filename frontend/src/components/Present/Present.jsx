import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../../../../backend/app/services.js";
import "./Present.scss";

function Present() {
  const { id } = useParams();
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const user = await getUserById(id);
        setFirstName(user.userInfos.firstName);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, [id]);

  return (
    <section className="present">
      <h1>
        Bonjour <span>{firstName}</span>
      </h1>
      <p>Félicitations ! Vous avez explosé vos objectifs hier 🎉</p>
    </section>
  );
}

export default Present;

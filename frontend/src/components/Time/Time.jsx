import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { getUserAverageSessions } from "../../../../backend/app/services.js";
import "./Time.scss";

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="tooltip">
        {`${payload[0].value} min`}
      </div>
    );
  }
  return null;
}

function Time() {
  const { id } = useParams();
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const sessionData = await getUserAverageSessions(id);
        setSessions(sessionData.sessions);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [id]);

  return (
    <div className="time-chart">
      <h2>Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={sessions} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <XAxis 
            dataKey="day"
            axisLine={false}
            tickLine={false}
            stroke="#fff"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis hide />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="sessionLength"
            stroke="#fff"
            strokeWidth={2}
            fill="rgba(255,255,255,0.2)"
            activeDot={{ r: 4, fill: "white", strokeWidth: 2, stroke: "rgba(255,255,255,0.3)" }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Time;

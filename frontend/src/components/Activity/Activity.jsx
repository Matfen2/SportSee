import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { getUserActivity } from "../../../../backend/app/services.js";
import "./Activity.scss";

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div style={{
        backgroundColor: "#E60000",
        color: "white",
        padding: "0px 8px",
        fontSize: "12px",
        lineHeight: "3.0",
        border: "none"
      }}>
        <p>{`${payload[1].value}kg`}</p>
        <p>{`${payload[0].value}Kcal`}</p>
      </div>
    );
  }
  return null;
}

function Activity() {
  const { id } = useParams();
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const activityData = await getUserActivity(id);
        setSessions(activityData.sessions);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [id]);

  return (
    <div className="activity-chart">
      <div className="header-line">
        <h2>Activité quotidienne</h2>
        <div className="legend-right">
          <span><span className="dot black"></span> Poids (kg)</span>
          <span><span className="dot red"></span> Calories brûlées (kCal)</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart
          data={sessions}
          margin={{ top: 30, right: 30, left: 30, bottom: 5 }}
          barGap={8}
        >
          <CartesianGrid strokeDasharray="3 3 3" vertical={false} />
          <XAxis dataKey="day" tickLine={false} axisLine={{ stroke: '#DEDEDE' }} />
          <YAxis 
            yAxisId="left"
            orientation="left"
            dataKey="calories"
            hide
          />
          <YAxis 
            yAxisId="right"
            orientation="right"
            dataKey="kilogram"
            axisLine={false}
            tickLine={false}
            domain={['dataMin - 1', 'dataMax + 1']}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar yAxisId="right" dataKey="kilogram" fill="#282D30" radius={[3,3,0,0]} barSize={7} />
          <Bar yAxisId="left" dataKey="calories" fill="#E60000" radius={[3,3,0,0]} barSize={7} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Activity;

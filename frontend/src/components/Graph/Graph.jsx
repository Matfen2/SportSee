import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from "recharts";
import { getUserPerformance } from "../../../../backend/app/services.js";
import "./Graph.scss";

export default function Graph() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    getUserPerformance(id)
      .then(perf => {
        const kind = {
          1: 'Cardio', 2: 'Energie', 3: 'Endurance', 4: 'Force', 5: 'Vitesse', 6: 'Intensité'
        };
        setData([
          { subject: 'Intensité', value: perf.data.find(d => kind[d.kind] === 'Intensité')?.value },
          { subject: 'Vitesse', value: perf.data.find(d => kind[d.kind] === 'Vitesse')?.value },
          { subject: 'Force', value: perf.data.find(d => kind[d.kind] === 'Force')?.value },
          { subject: 'Endurance', value: perf.data.find(d => kind[d.kind] === 'Endurance')?.value },
          { subject: 'Energie', value: perf.data.find(d => kind[d.kind] === 'Energie')?.value },
          { subject: 'Cardio', value: perf.data.find(d => kind[d.kind] === 'Cardio')?.value }
        ]);
      })
      .catch(console.error);
  }, [id]);

  return (
    <div className="graph-chart">
      <ResponsiveContainer width="100%" height={250}>
        <RadarChart data={data}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis dataKey="subject" tick={{ fill: "#fff", fontSize: 12 }} />
          <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

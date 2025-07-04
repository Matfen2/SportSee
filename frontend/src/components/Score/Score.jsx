import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import { getUserById } from '../../../../backend/app/services.js';
import './Score.scss';

export default function Score() {
  const { id } = useParams();
  const [score, setScore] = useState(0);

  useEffect(() => {
    getUserById(id)
      .then(user => setScore(user.todayScore ?? user.score ?? 0))
      .catch(console.error);
  }, [id]);

  const data = [
    { value: 100, fill: '#FBFBFB' },  // fond cercle
    { value: score * 100, fill: '#FF0000' } // progression 
  ];

  return (
    <div className="score">
      <h3>Score</h3>
      <div className="score-chart">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart innerRadius="80%" outerRadius="70%" barSize={10} data={data} startAngle={90} endAngle={450}>
            <RadialBar dataKey="value" clockWise cornerRadius={50} />
          </RadialBarChart>
        </ResponsiveContainer>
        <div className="score-text">
          <p className="percent">{`${(score * 100).toFixed(0)}%`}</p>
          <p>de votre<br />objectif</p>
        </div>
      </div>
    </div>
  );
}

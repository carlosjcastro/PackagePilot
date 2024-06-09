import React from 'react';
import './stats.css';
import { stats } from '../constants';

const Stats: React.FC = () => (
  <section className="stats-container">
    {stats.map((stat) => (
      <div key={stat.id} className="stat-item">
        <h4 className="stat-value">{stat.value}</h4>
        <p className="stat-title">{stat.title}</p>
      </div>
    ))}
  </section>
);

export default Stats;

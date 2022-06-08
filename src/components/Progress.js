import React from 'react';
import progress from './style-components/progress.png';
import './style-components/Progress.css';

const Progress = () => (
  <div className="progressDataContainer">
    <img src={progress} alt="progress" />
    <div className="percentageProgress">
      <h3>64%</h3>
      <p>completed</p>
    </div>
  </div>
);

export default Progress;

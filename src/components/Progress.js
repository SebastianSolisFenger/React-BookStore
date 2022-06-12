import React from 'react';
import { CircularProgressBar } from '@tomik23/react-circular-progress-bar';
// import progress from './style-components/progress.png';
import './style-components/Progress.css';

const Progress = () => (
  <div className="progressDataContainer">
    <CircularProgressBar
      animationSmooth="1s ease-out"
      colorCircle="#f1f1f1"
      colorSlice="#0290ff"
      percent={Math.floor(Math.random() * 100) + 15}
      size={200}
    />
    {/* <div className="percentageProgress">
      <h3>
        CHAPTER:
        <span>{Math.floor(Math.random() * 60) + 3}</span>
      </h3>
      <p>completed</p>
    </div> */}
  </div>
);

export default Progress;

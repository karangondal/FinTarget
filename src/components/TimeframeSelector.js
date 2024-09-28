import React from 'react';

const TimeframeSelector = ({ onTimeframeChange }) => {
  return (
    <div>
      <button onClick={() => onTimeframeChange('1m')}>1 Minute</button>
      <button onClick={() => onTimeframeChange('3m')}>3 Minutes</button>
      <button onClick={() => onTimeframeChange('5m')}>5 Minutes</button>
    </div>
  );
};

export default TimeframeSelector;

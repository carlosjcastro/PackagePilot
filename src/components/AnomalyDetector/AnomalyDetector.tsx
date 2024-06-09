import React, { useState } from 'react';
import { detectAnomaly } from '../../api';

const AnomalyDetector: React.FC = () => {
  const [data, setData] = useState('');
  const [result, setResult] = useState(null);

  const handleDetect = async () => {
    const response = await detectAnomaly(JSON.parse(data));
    setResult(response);
  };

  return (
    <div>
      <h2>Anomaly Detector</h2>
      <textarea
        value={data}
        onChange={(e) => setData(e.target.value)}
        placeholder="Enter time series data in JSON format"
      />
      <button onClick={handleDetect}>Detect Anomaly</button>
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
};

export default AnomalyDetector;

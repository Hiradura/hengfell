// Orosz Oivér 2025.01.31 18:30 

import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [radius, setRadius] = useState('');
  const [height, setHeight] = useState('');
  const [surfaceArea, setSurfaceArea] = useState(null);

  const calculateSurfaceArea = () => {
    const r = parseFloat(radius);
    const h = parseFloat(height);

    if (!isNaN(r) && !isNaN(h) && r > 0 && h > 0) {
      const area = 2 * Math.PI * r * (r + h);
      setSurfaceArea(area.toFixed(2) + ' cm²');
    } else {
      setSurfaceArea('Hibás bemenet!');
    }
  };

  return (
    <div className="container">
      <h1 className="title">Henger Felszín Számítás</h1>

      <input
        className="input"
        type="number"
        placeholder="Sugár (cm)"
        value={radius}
        onChange={(e) => setRadius(e.target.value)}
      />

      <input
        className="input"
        type="number"
        placeholder="Magasság (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />

      <button className="button" onClick={calculateSurfaceArea}>
        Számítás
      </button>

      {surfaceArea !== null && (
        <div className="resultBox">
          <p className="resultText">Felszín: {surfaceArea}</p>
        </div>
      )}
    </div>
  );
}

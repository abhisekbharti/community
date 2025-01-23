import { useEffect } from 'react';
import './App.css'; // Make sure to import your CSS file

function MagicBackground() {
  useEffect(() => {
    // You can use useEffect for any additional logic or if you want to trigger something
  }, []);

  return (
    <div className="magic-background">
      <h1>Magic Background Color</h1>
      <p>Enjoy the magical color transition!</p>
    </div>
  );
}

export default MagicBackground;

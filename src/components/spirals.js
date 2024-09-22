import { useEffect, useState } from 'react';
import { PiSpiralFill } from 'react-icons/pi';

const RandomSpiral = ({ size, speed, randomKeyframe }) => {
  const spiralStyle = {
    width: `${size}px`,
    height: `${size}px`,
    animation: `${randomKeyframe} ${speed}s infinite ease-in-out`,
    position: 'absolute',
    top: `${Math.random() * 100}%`, 
    left: `${Math.random() * 100}%`,
  };

  return <PiSpiralFill className="spiral-icon" style={spiralStyle} />;
};

const Spirals = () => {
  const [numSpirals, setNumSpirals] = useState(20);

  const calculateSpirals = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    if (screenWidth < 500) {
      return 10;
    } else if (screenWidth >= 500 && screenWidth < 1200) {
      return 20;
    } else {
      return 30;
    }
  };

  useEffect(() => {

    setNumSpirals(calculateSpirals());

    const handleResize = () => {
      setNumSpirals(calculateSpirals());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const createRandomKeyframe = (index) => {
    const randomX = Math.random() * 300 - 100;
    const randomY = Math.random() * 300 - 100;

    return `
      @keyframes float-${index} {
        0% { 
            transform: translate(0, 0); 
        }
        25% { 
            transform: translate(${randomX / 2}px, ${randomY / 2}px); 
        }
        50% { 
            transform: translate(${randomX}px, ${randomY}px); 
        }
        75% { 
            transform: translate(${randomX / 2}px, ${randomY / 2}px); 
        }
        100% { 
            transform: translate(0, 0); 
        }
      }
    `;
  };

  useEffect(() => {
    const styleSheet = document.styleSheets[0];

    for (let i = 0; i < numSpirals; i++) {
      const keyframe = createRandomKeyframe(i);
      styleSheet.insertRule(keyframe, styleSheet.cssRules.length);
    }
  }, [numSpirals]);

  const spirals = Array.from({ length: numSpirals }, (_, index) => {
    const size = Math.floor(Math.random() * 100) + 20;
    const speed = Math.random() * 20 + 3;

    return (
      <RandomSpiral
        key={index}
        size={size}
        speed={speed}
        randomKeyframe={`float-${index}`}
      />
    );
  });

  return <div className="img">{spirals}</div>;
};

export default Spirals;

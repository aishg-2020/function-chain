import React, { useEffect, useState } from 'react';

const Connector = ({ startId, endId }) => {
  const [lineProps, setLineProps] = useState({
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0
  });

  useEffect(() => {
    const updateLine = () => {
      const startElem = document.getElementById(startId);
      const endElem = document.getElementById(endId);

      if (startElem && endElem) {
        const startRect = startElem.getBoundingClientRect();
        const endRect = endElem.getBoundingClientRect();
        console.log('startRect', startRect.height / 2);
        console.log('endRect', endRect.height / 2);

        setLineProps({
          x1: startRect.left + startRect.width / 2,
          y1: startRect.top + 7,
          x2: endRect.right - endRect.width / 2,
          y2: endRect.top + 7
        });
      }
    };

    updateLine();
    window.addEventListener('resize', updateLine);

    return () => {
      window.removeEventListener('resize', updateLine);
    };
  }, [startId, endId]);

  return (
    <svg
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none'
      }}>
      <path
        d={`M${lineProps.x1} ${lineProps.y1 } 
        C ${(lineProps.x1 + lineProps.x2) / 2} ${lineProps.y1 }, 
          ${(lineProps.x1 + lineProps.x2) / 2} ${lineProps.y2 }, 
          ${lineProps.x2} ${lineProps.y2 }`}
        stroke="rgba(0, 102, 255, 0.3)"
        fill="transparent"
        strokeWidth="6"
      />
    </svg>
  );
};

export default Connector;

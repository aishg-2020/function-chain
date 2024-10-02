import React, { useState, useEffect } from 'react';
import FunctionCard from './Components/FunctionCard';
import Connector from './Components/Connector';
import './App.css';
import CustomInputWithLabel from './Components/CustomInputWithLabel';

function App() {
  const [initialValue, setInitialValue] = useState(2);
  const [equations, setEquations] = useState({
    1: 'x^2',
    2: '2*x+4',
    3: 'x^2+20',
    4: 'x-2',
    5: 'x/2'
  });

  const [outputs, setOutputs] = useState({});

  useEffect(() => {
    const evaluate = (equation, x) => {
      const safeEquation = equation.replace(/\^/g, '**');
      try {
        return new Function('x', `return ${safeEquation}`)(x);
      } catch (error) {
        return NaN;
      }
    };

    const chainOutputs = () => {
      const out1 = evaluate(equations[1], initialValue);
      const out2 = evaluate(equations[2], out1);
      const out4 = evaluate(equations[4], out2);
      const out5 = evaluate(equations[5], out4);
      const out3 = evaluate(equations[3], out5);

      setOutputs({
        1: out1,
        2: out2,
        4: out4,
        5: out5,
        3: out3
      });
    };

    chainOutputs();
  }, [initialValue, equations]);

  return (
    <div className="app-container ">
      <div className="flex flex-col space-y-20">
        <div className="flex justify-center space-x-20">
          <CustomInputWithLabel
            labelText="Initial value of x"
            labelBgColor="rgba(226, 154, 45, 1)"
            imageSrc="/connecting-point.svg"
            initialValue={initialValue}
            setInputValue={setInitialValue}
            id="start-value"
          />
          <FunctionCard
            id={1}
            equation={equations[1]}
            setEquation={(newEq) => setEquations({ ...equations, 1: newEq })}
            next="Function 2"
          />
          <FunctionCard
            id={2}
            equation={equations[2]}
            setEquation={(newEq) => setEquations({ ...equations, 2: newEq })}
            next="Function 4"
          />
          <FunctionCard
            id={3}
            equation={equations[3]}
            setEquation={(newEq) => setEquations({ ...equations, 3: newEq })}
            next="Final Output"
          />
          <CustomInputWithLabel
            labelText="Final Output y"
            labelBgColor="rgba(76, 175, 121, 1)"
            imageSrc="/connecting-point.svg"
            variant="end"
            initialValue={outputs[3]}
            id="final-value"
          />
        </div>

        <div className="flex justify-center space-x-20">
          <FunctionCard
            id={4}
            equation={equations[4]}
            setEquation={(newEq) => setEquations({ ...equations, 4: newEq })}
            next="Function 5"
          />
          <FunctionCard
            id={5}
            equation={equations[5]}
            setEquation={(newEq) => setEquations({ ...equations, 5: newEq })}
            next="Function 3"
          />
        </div>
      </div>
      <Connector startId="start-value" endId="input-1" />
      <Connector startId="output-1" endId="input-2" />
      <Connector startId="output-2" endId="input-4" />
      <Connector startId="output-4" endId="input-5" />
      <Connector startId="output-5" endId="input-3" />
      <Connector startId="output-3" endId="final-value" />

      <div className="flex justify-center mt-6">
        <h2>Final Output (y): {outputs[3]}</h2>
      </div>
    </div>
  );
}

export default App;

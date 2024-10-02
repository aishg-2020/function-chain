import React from 'react';

const FunctionCard = ({ id, equation, setEquation, next }) => {
  return (
    <div className="function-card p-4 border rounded-md shadow-md w-48 relative">
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="flex gap-2">
            <img src="/fn-title.svg" alt="fn-title" />
            <div className="fn-title">Function: {id}</div>
          </div>

          <div className="my-2">
            <label className="label">Equation</label>
            <input
              type="text"
              value={equation}
              onChange={(e) => setEquation(e.target.value)}
              className="input border border-gray-300 p-2 w-full"
            />
          </div>

          <div className="my-2">
            <label className="label">Next Function: </label>
            <select disabled value={next} className="select p-2 border border-gray-300 w-full">
              <option>{next}</option>
            </select>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <img id={`input-${id}`} alt="input-point" src="/connecting-point.svg" />
            <div className="io">input</div>
          </div>
          <div className="flex gap-2">
            <div className="io">output</div>
            <img id={`output-${id}`} alt="output-point" src="/connecting-point.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunctionCard;

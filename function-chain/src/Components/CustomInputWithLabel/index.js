import React from 'react';

const CustomInputWithLabel = ({
  labelText,
  labelBgColor,
  imageSrc,
  variant = 'start',
  initialValue,
  setInputValue,
  id
}) => {
  return (
    <div className="flex flex-col items-start gap-3 self-end " style={{ width: 115 }}>
      <div
        className={`w-full text-white p-2  `}
        style={{ background: labelBgColor, borderRadius: 14, fontSize: 12 }}>
        {labelText}
      </div>

      <div
        className={`w-full flex items-center border-2 overflow-hidden ${
          variant === 'end' ? 'flex-row-reverse' : 'flex-row'
        }`}
        style={{ borderRadius: 14, borderColor: labelBgColor }}>
        <input
          type="text"
          style={{ width: '76px' }}
          className="flex-grow py-2 px-4 text-black outline-none"
          placeholder="Enter value"
          value={initialValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <div style={{ background: labelBgColor, opacity: 0.5, width: '1px', height: 44 }} />

        <div className="p-2">
          <img src={imageSrc} alt="icon" id={id}  />
        </div>
      </div>
    </div>
  );
};

export default CustomInputWithLabel;

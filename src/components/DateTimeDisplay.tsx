import React from 'react';

interface DateTimeDisplayProps {
  value: number;
  type: string;
  isDanger?: boolean;
}

const DateTimeDisplay: React.FC<DateTimeDisplayProps> = ({ value, type, isDanger }) => {
  const formatValue = (value: number) => value.toString().padStart(2, '0');

  return (
    <div className={isDanger ? 'countdown danger' : 'countdown'}>
      <p>{formatValue(value)}</p>
      <span>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;

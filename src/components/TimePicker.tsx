import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

interface TimePickerProps {
  setTargetDate: (date: number) => void;
}

const TimePicker: React.FC<TimePickerProps> = ({ setTargetDate }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    if (date) {
      setTargetDate(date.getTime());
    }
  };

  return (
    <div className="time-picker">
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        showTimeSelect
        dateFormat="Pp"
        placeholderText="Select Date and Time"
      />
    </div>
  );
};

export default TimePicker;

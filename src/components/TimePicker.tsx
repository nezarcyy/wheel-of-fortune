import React, { useState } from 'react';
import DateTimePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
    <div className="flex justify-center items-center py-4">
      <DateTimePicker
        selected={selectedDate}
        onChange={handleDateChange}
        showTimeSelect
        dateFormat="Pp"
        placeholderText="Select Date and Time"
        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2"
      />
    </div>
  );
};

export default TimePicker;

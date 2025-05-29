import React from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const CalendarPage = () => {
  const [value, setValue] = React.useState(new Date());

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Calendar</h2>
      <Calendar onChange={setValue} value={value} />
    </div>
  );
};

export default CalendarPage;
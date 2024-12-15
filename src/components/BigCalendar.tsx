'use client';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from 'react';
import { calendarEvents } from '@/lib/data';
import { min } from './../../node_modules/@types/date-arithmetic/index.d';

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState(Views.WORK_WEEK); // Default to WORK_WEEK view

  // Properly define the handleOnChangeView function
  const handleOnChangeView = (selectedView: string) => {
    setView(selectedView);
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        views={[Views.WORK_WEEK, Views.DAY]} // Include MONTH for testing
        view={view}
        onView={handleOnChangeView} // Pass the custom handler
        defaultDate={new Date(2024, 7, 12)} // Ensure default date aligns with event dates
        style={{ height: '98%' }}
        min={new Date(2025,1,0,8,0,0)}
        max={new Date(2025,1,0,17,0,0)}
      />
    </div>
  );
};

export default BigCalendar;

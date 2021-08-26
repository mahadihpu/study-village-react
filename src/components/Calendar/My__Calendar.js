import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import events from "./events";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment)


const My__Calendar = () => {
   return (
      <div>
         <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
         />
      </div>
   );
};

export default My__Calendar;
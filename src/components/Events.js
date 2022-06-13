import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import daygrid from "@fullcalendar/daygrid";
import googleCalendarPlugin from '@fullcalendar/google-calendar';



const Events = () => {

    console.log(process.env.REACT_APP_API_KEY)


    return (
        <section className="section events">

            <FullCalendar
                plugins={[daygrid, googleCalendarPlugin]}
                // headerToolbar={{
                //     left: 'prev,next today',
                //     center: 'title',
                //     right: 'dayGridMonth,timeGridWeek,timeGridDay'
                // }}
                googleCalendarApiKey={process.env.REACT_APP_API_KEY}
                events={{ googleCalendarId: 'v91g62mmvh6v2o925vvdj74edg@group.calendar.google.com' }}

            />

        </section>


    )
}

export default Events
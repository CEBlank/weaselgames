import { useState, useEffect } from 'react'
import { useCalendarApp, ScheduleXCalendar } from '@schedule-x/react'
import {
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from '@schedule-x/calendar'
import { createEventsServicePlugin } from '@schedule-x/events-service'
import 'temporal-polyfill/global'
import '@schedule-x/theme-default/dist/index.css'

function CalendarApp() {
  const eventsService = useState(() => createEventsServicePlugin())[0]

  const calendar = useCalendarApp({
    views: [createViewDay(), createViewWeek(), createViewMonthGrid(), createViewMonthAgenda()],
    events: [
      {
        id: '1',
        title: 'Spooky Night',
        start: Temporal.PlainDate.from('2025-10-31'),
        end: Temporal.PlainDate.from('2025-10-31'),
      },
        {
        id: '2',
        title: 'Casual Card Crash',
        start: Temporal.ZonedDateTime.from('2025-11-01T12:00:00+01:00[Europe/Berlin]'),
        end: Temporal.ZonedDateTime.from('2025-11-01T13:00:00+01:00[Europe/Berlin]'),
      },
    ],
    plugins: [eventsService]
  })

  useEffect(() => {
    // get all events
    eventsService.getAll()
  }, [])

  return (
    <div id="calendar" className='flex'>
      <ScheduleXCalendar calendarApp={calendar} />
    </div>
  )
}

export default CalendarApp
import CalendarApp from "./Calendar"

export function Events() {

  return (
    <>
    <div
      id='eventsHead'
      className="text-center">
      <h1>Events</h1>
    </div>
      

<div className="flex">
      {/* Google Calendar Basic Embed least response thing ever */}
      <div className="mx-15 flex-auto">
{/*         <iframe 
          id="iFrame"
          src="https://calendar.google.com/calendar/embed?src=weaselgameco%40gmail.com&ctz=America%2FChicago" 
          width="1000" 
          height="1000" 
          >
        </iframe> */}

        <CalendarApp />
      </div>
      
          <div
      className="flex-auto">
        <h2>Details</h2>
      </div>


    </div>


    <div
      id='eventsHead'
      className="mt-2 text-center">
      <h1>Past Events</h1>

    </div>


    </>
  )
}
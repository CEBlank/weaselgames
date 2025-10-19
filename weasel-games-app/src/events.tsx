export function Events() {

  return (
    <>
    <div
      id='eventsHead'
      className="text-center">
      <h1>Events</h1>
    </div>
      
    <div className="grid grid-cols-9 gap-4">
      <div className="col-start-2" >
        <iframe 
        
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FChicago&showPrint=0&src=d2Vhc2VsZ2FtZWNvQGdtYWlsLmNvbQ&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039be5&color=%230b8043" 
        width="1000" 
        height="1000"
        ></iframe>
      </div>

      <div
      className="col-start-7 col-span-1">


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
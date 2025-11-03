import CalendarApp from "./Calendar"

export function Events() {

  return (
    <>
    

    
    <div
      id='eventsHead'
      className="text-center">
      <h1>Events</h1>
    </div>
      
    <div  id="container">
      <div id="iFrame" className="flex sm:flex-shrink">
      {/* Google Calendar Basic Embed least response thing ever */}
{/*       <div
      id="calendarFrame"
      className="flex-auto ">
        <iframe 
          id="iFrame"
          src="https://calendar.google.com/calendar/embed?src=weaselgameco%40gmail.com&ctz=America%2FChicago" 
          width="1000" 
          height="1000" 
          >
        </iframe> 

      
      </div> */}
        <CalendarApp />
        </div>

    <div
      className="mt-2 md:flex-wrap">
      <h1
      id='detailsHead'
      >Details</h1>

        <div
          id="detailsContent" 
          className="rounded-2xl max-w-full h-50 bg-gray-400 md:flex-wrap">
            <p className="my-3 py-1">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
                <button 
                  id="heroBtn" 
                  className="btn mx-1 mt-2">
                    <a 
                      id="homeButton"
                      href="#">
                      Register
                    </a>
                </button>

            <p className="my-3">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
                <button 
                  id="heroBtn" 
                  className="btn mx-1 mt-2">
                    <a 
                      id="homeButton"
                      href="#">
                      Contact Us
                    </a>
                </button>
        </div>

    </div>


    <div
      id='eventsHead'
      className="mt-2 text-center">
      <h1>Past Events</h1>
    </div>

    <div id="eventGallery" className="flex ">

      <div className="grid grid-cols-3 gap-4 md:flex-wrap">

        <div className="card bg-gray-400 w-96 shadow-sm ">
          <div className="card-body">
            <h2 className="card-title">Card Tournaments 2025</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
          </div>
          <figure>
            <img
              src={'trophy.jpg'}
              alt="trophy" />
          </figure>
        </div>

        <div className="card bg-gray-400 w-96 shadow-sm ">
          <div className="card-body">
            <h2 className="card-title">Yu-Gi-Oh Casual Night</h2>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>
          </div>
          <figure>
            <img
              src={'yugiohh.jpg'}
              alt="yugioh" />
          </figure>
        </div>

        <div className="card bg-gray-400 w-96 shadow-sm ">
          <div className="card-body">
            <h2 className="card-title">Dungeons&Dragons: Adventure League</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            </p>
          </div>
          <figure>
            <img
              src={'gameNight.jpg'}
              alt="gameNight" />
          </figure>
        </div>

      </div>
    </div>

    </div>
    </>
  )
}
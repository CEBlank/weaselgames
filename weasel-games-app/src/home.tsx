


export function Home() {

  console.log('Home Loaded')

  return (
    <>
      <div className='home'>
        <div>
          
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                  "url(d&d.jpg)",
            }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <div id='bigHero1' className='px-1 rounded-box'> 
                  <h1 className="mb-5 text-5xl font-bold ">Welcome!</h1>
                    <p className="mb-5">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                  </p>
                </div>

                <button 
                  id="heroBtn" 
                  className="btn mx-1">
                    <a 
                      id="homeButton"
                      href="/shop">
                      CCG Singles Catalog
                    </a>
                  </button>

                <button id="heroBtn" className="btn">
                  <a
                    id="homeButton"
                    href='/events'>
                    Events Schedule
                  </a>
                  
                </button>

              </div>
            </div>
          </div>

        </div>
      </div>

      <div
        className="border-t border-gray-200"
        id="carouselHome">     
          <div 
            className="text-center"
            id='news'>
            <h1>News and Events</h1>
          </div>

{/* Responsive design goes wonky at 417 */}
        <div
          id="homeCards"
          className="flex flex-col justify-center">

              <div id="item1" className="flex-wrap rounded-2xl card lg:card-side bg-gray-400 shadow-sm mb-4 md:mx-6">

                  <figure>
                    <img
                      src={"d&d.jpg"}
                      className="max-w-sm rounded-lg"/>
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">Tabletop Game Events</h2>
                      <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                      </p>

                      <button id="heroBtn" className="btn">
                        <a
                          id="homeButton"
                          href='/events'>
                          Check Events
                        </a>
                    </button>
                    </div>
                </div>


{/* Add modals! */}
              <div id="item2" className="flex-wrap rounded-2xl card lg:card-side bg-gray-400 shadow-sm mb-4 md:mx-6">

                  <figure>
                    <img
                      src={"mtg.jpg"}
                      className="max-w-sm rounded-lg"/>
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">Card Tournaments</h2>
                      <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                      </p>

                      <button id="heroBtn" className="btn">
                        <a
                          id="homeButton"
                          href='#'>
                          Registration
                        </a>
                    </button>
                    </div>
                </div>

                <div id="item3" className="flex-wrap rounded-2xl card lg:card-side bg-gray-400 shadow-sm mb-4 md:mx-6">

                  <figure>
                    <img
                      src={"warhammer40k.jpg"}
                      className="max-w-sm rounded-lg"/>
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">Open Paint Nights</h2>
                      <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                      </p>

                      <button id="heroBtn" className="btn">
                        <a
                          id="homeButton"
                          href='#'>
                          Details
                        </a>
                    </button>
                    </div>
                </div>
              
            </div>
          </div>

    </>
  )
}





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


        <div className="grid grid-cols-6 gap-4 sm:grid-cols-2">
          <div className="col-span-3 sm:col-span-6">

            <div 
              className="carousel rounded-2xl"
              >

              <div id="item1" className="carousel-item w-full bg-gray-400 ">

                <div className="content-center lg:max-h-4xl md:max-h-2xl md:items-center sm:text-center">
                  <div className="hero-content flex-col lg:flex-row">
                    <img
                      src={"d&d.jpg"}
                      className="max-w-sm rounded-lg"
                    />
                    <div>
                      <h1 className="text-5xl font-bold">Tabletop Game Events</h1>
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
                </div>

              </div>


              <div id="item2" className="carousel-item w-full bg-gray-400">  
                <div className="hero h-100">
                  <div className="hero-content flex-col lg:flex-row">
                    <img
                      src={"mtg.jpg"}
                      className="max-w-sm rounded-lg"
                    />
                    <div>
                      <h1 className="text-5xl font-bold">Upcoming Releases</h1>
                      <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                      </p>
                      <button id='heroBtn' className="btn">Pre-Order</button>
                    </div>
                  </div>
                </div>
              </div>


              <div id="item3" className="carousel-item w-full bg-gray-400">

                <div className="content-center h-100">
                  <div className="hero-content flex-col lg:flex-row">
                    <img 
                      src={"warhammer40k.jpg"}
                      className="max-w-sm rounded-lg"
                    /> 
                      <div>
                        <h1 className="text-5xl font-bold">Open Paint Night</h1>
                          <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                          </p>
                        <button id='heroBtn' className="btn">Register</button>
                    </div>
                  </div>
                </div>

                  
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center gap-2 py-2">
          <a href="#item1" className="btn btn-xs bg-gray-200 border-gray-400">1</a>
          <a href="#item2" className="btn btn-xs bg-gray-200 border-gray-400">2</a>
          <a href="#item3" className="btn btn-xs bg-gray-200 border-gray-400">3</a>
        </div>

      </div>

    </>
  )
}





export function Home() {

  console.log('Home Loaded')

  return (
    <>
      <div className='home'>
        <div>
          
          <div
            className="hero max-h-600 max-w-screen"
            style={{
              backgroundImage:
                  "d&d.jpg"
            }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Welcome!</h1>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                  quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                <button className="btn mx-1">CCG Singles Catalog</button>

                <button className="btn">Events Schedule</button>
              </div>
            </div>
          </div>




        </div>
      </div>

      <div
        className="border-t border-gray-200">
          
          <div 
            className="text-center"
            id='news'>
            <h1>News and Events</h1>
          </div>
          

        <div className="carousel rounded-2xl mx-30 h-100">
          
          <div id="item1" className="carousel-item w-full bg-gray-400 ">

            <div className="hero h-100">
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
                  <button className="btn">Check Events</button>
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
                  <button className="btn">Pre-Order</button>
                </div>
              </div>
            </div>


          </div>


          <div id="item3" className="carousel-item w-full bg-gray-400">

            <div className="hero h-100">
              <div className="hero-content flex-col lg:flex-row">
  {/*               <img 
                  src={"warhammer40k.jpg"}
                  className="max-w-s rounded-lg"
                /> */}

              </div>
            </div>

              
          </div>

          
        </div>
        <div className="flex w-full justify-center gap-2 py-2">
          <a href="#item1" className="btn btn-xs">1</a>
          <a href="#item2" className="btn btn-xs">2</a>
          <a href="#item3" className="btn btn-xs">3</a>
        </div>

      </div>

    </>
  )
}


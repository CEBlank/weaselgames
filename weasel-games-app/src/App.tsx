//import { useState } from 'react'
import './index.css'
import './App.css'



function App() {

  return (
    <>

      <ul className="navbar menu lg:menu-horizontal bg-base-100 rounded-box ">
        <li>
          <a>
            <img className='w-40 h-40' src='images/ermineLogo.png'/>
          </a>
        </li>
        <li>
          <h1 className='text-2xl bold'>Weasel Games</h1>
        </li>  

        <li>
          <details>
            <summary>Parent item</summary>
            <ul>
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
              <li>
                <details>
                  <summary>Parent</summary>
                  <ul>
                    <li><a>item 1</a></li>
                    <li><a>item 2</a></li>
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </li>
        <li><a>Item 3</a></li>
      </ul>

    </>
  )
}

export default App

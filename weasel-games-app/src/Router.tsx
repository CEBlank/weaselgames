
import { Routes, Route } from 'react-router-dom';
//import ReactDOM from 'react-dom/client';


import Nav from './Nav'
// import pingDB from './testDBcall.js'

import { Home } from './home'
import { Shop } from './shop'
import { Events } from './events'
import { About } from './about'
import { Community } from './community'
import { Profile } from './Profile';

// import { callMongo } from './dbCall';


export default function Router() {
  return (
  <>
    {/* {pingDB()} */}
    <Nav/>
    <Routes>
      <Route index element={<Home />}/>
      <Route path="*" element={<Home />}/>
      <Route path="/shop" element={<Shop />}/>
      <Route path="/events" element={<Events />}/>
      <Route path="/community" element={<Community />}/>
      <Route path="/about" element={<About />}/>

      <Route path="/profile" element={<Profile />}/> {/* Need to make THIS one protected route */}
      <Route path="/" element={<Home />}/>
    </Routes>
  </>
  )
}
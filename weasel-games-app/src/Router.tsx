
import { Routes, Route } from 'react-router-dom';
//import ReactDOM from 'react-dom/client';


import Nav from './Nav'

import { Home } from './home'
import { Shop } from './shop'
import { Events } from './events'
import { About } from './about'
import { Community } from './community'
import  Profile from './Profile'

export default function Router() {
  return (
  <>
    <Nav/>
    <Routes>
      <Route index element={<Home />}/>
      <Route path="*" element={<Home />}/>
      <Route path="/shop" element={<Shop />}/>
      <Route path="/events" element={<Events />}/>
      <Route path="/community" element={<Community />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/" element={<Home />}/>
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </>
  )
}
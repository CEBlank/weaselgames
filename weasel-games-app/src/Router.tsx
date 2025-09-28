import { Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import Nav from './Nav' //why this is working... Is a mystery

import { Home } from './components/home'
import { Shop } from './components/shop'
import { Events } from './components/events'
import { About } from './components/about'
import { Community } from './components/community'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Nav/>}>
        <Route index element={<Home/>}/>
        <Route path="*" element={<Home/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/" element={<Home/>}/>
      </Route>
    </Routes>
  )
}
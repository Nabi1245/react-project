import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../component/pages/Home';
import About from '../component/pages/About';
import Contact from '../component/pages/Contact'
import PostData from '../api/PostData';
import PostPage from '../api/PostPage';
import DynamicUser from '../component/pages/DynamicUser';
import AgeCheck from '../component/Dynamic/AgeCheck';
import User from '../component/props/User';
import UseState from '../component/hooks/UseState';
import InputState from '../component/controlledcomponent/InputState';
import MapLoop from '../component/loop/MapLoop';
import ConditionalLogic from '../component/logical/ConditionalLogic';
import UseEffect from '../component/hooks/UseEffect';
import Data from '../api/Data';


const AppRoutes = () => {
  return (
    <BrowserRouter>
     <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Home />} />

        {/* When user visits "/about", show About component */}
        <Route path="/about" element={<About/>} />

        {/* When user visits "/contact", show Contact component */}
        <Route path="/contact" element={<Contact/>} />

        <Route path="/post" element={<PostData/>} />
        {/*Dynamic Route */}
        <Route path="/post/:postId" element={<PostPage/>} />
        {/* api  */}
        <Route path='api/data' element={<Data/>}/>
        {/* Dynamic Route With Username */}
        <Route path="/user/:userName" element={<DynamicUser/>} />
        
        {/* age check with Dynamic */}
        <Route path='/check-age' element={<AgeCheck/>} />

        {/* props routes */}
        <Route path='/props/user' element={<User/>} />

        {/* Hooks */}
        <Route path='/hook/usestate' element={<UseState/>} />
        <Route path='/hook/useeffect' element={<UseEffect/>}/>

        {/* ConctrolledComponent */}
        <Route path='/formvalidation' element={<InputState/>} />

        {/* Loop  */}
        <Route path='/maploop' element={<MapLoop/>} />

        {/* logical */}
        <Route path='/conditionallogic'element={<ConditionalLogic/>} />
     </Routes>
    </BrowserRouter>




  )
}

export default AppRoutes;
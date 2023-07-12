import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home/Home';
import Main from './Main';
import Menu from './Menu/Menu';
import LocSearch from './Home/LocSearch';
import Item from './itemDetails/item';
const Routing = ()=>{
    return(
        <div>
            <BrowserRouter>
            <Header/>
            <Routes>
                <Route path ='/' element={<Main/>}/>
                    <Route index  element={<Home/>}/>
                     <Route path ='Home' element={<Home/>}/>
                     <Route path ='Menu/:categoryid' element={<Menu/>}/>
                     <Route path ='LocSearch' element={<LocSearch/>}/>
                     <Route path ='item/:itemid' element={<Menu/>}/>
            </Routes>
            <Footer/>
            </BrowserRouter>
        </div>
    )
}

export default Routing;
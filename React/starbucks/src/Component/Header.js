import React from 'react';
import './Header.css'
import {Link} from "react-router-dom";
const Header = () =>{
    return(
        <>
           <main>
            <header>
            <img src="https://i.ibb.co/0qhj0Zy/starbuks-logo.png" alt="starbuks-logo" className='Headerpic'/>
            <div className="home"><Link to ='/' >Home</Link></div>
             <div className="home"><Link to='/SampleConnect'>Order</Link></div> 
             <div className="home"><a href="*">Pay</a></div>
             <div className="home"><Link to='/LocSearch'>Store</Link></div>
              <span id="geo" onclick="geolocation()"><i class="fa-solid fa-location-dot"></i></span>
              <span id="out"></span>
             <form ><input type="text" placeholder= "looking for something else??"/></form>
             <span id="ld-mode" onClick="changemode()"><i className="fa-regular fa-moon fa-2x"></i></span>
             <span id = "w-forecast"><i className="fa-solid fa-cloud-sun-rain fa-2x"></i></span>
             <span id="weather"></span>
             <div className="user"><i className="fa-solid fa-circle-user fa-3x"></i></div>
        </header>
        </main>
        </>
    )
}

export default Header
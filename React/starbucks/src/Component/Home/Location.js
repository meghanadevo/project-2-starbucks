import React from 'react';
import './Location.css'
const Location = () =>{
    return(
        <>
           <div className="Location">
        <div className="Location-header">
        <h2 style={{display: "inline-block"}}>We have a news for you!</h2>
    </div>
        <div className="Location-body">
           <img src="https://i.ibb.co/fFCfCqr/loc-mysore.jpg" alt="loc-mysore" id="Location-image"/>
            <h2>New Store in Mysuru</h2>
            <p>Tata starbucks expands its footprints in Southern India with the opening of....</p>
            <button type="submit">Know more</button>
        </div>
    </div>
        </>
    )
}

export default Location;
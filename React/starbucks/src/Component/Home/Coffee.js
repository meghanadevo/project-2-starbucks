import React from 'react';
import './Coffee.css'
const Coffee = () =>{
    return(
        <>
                <div className="coffee">
            <div className="coffee-header">
            <h2 id="coffee-heading">Learn more about the world of coffee!</h2>
            <button type="submit">Discover more</button></div>
            <div className="coffee-body">
                    <button type="submit">Coffee culture</button>
                    <div className="coffee-sub-body" style={{backgroundImage:`url("https://i.ibb.co/TmMwbBG/coffee-plucking.jpg")`}}>
                <h3 className="coffee-subheading">Starbucks' Commitment to Sustainability</h3>
                <p id="coffee-para">With sustainable practices and high quality standards,Starbucks is committed to good quality and good of the earth. </p>
                <button type="submit">Learn more</button>
                    </div>
            </div>
            </div>
        </>
    )
}

export default Coffee
import React from 'react';
import './Handcraft.css';
import {Link} from 'react-router-dom';

 const Handcraft=()=>{

    return(
        <>
                <div className="Handcrafted">
            <h3 id="hc-heading">Handcrafted Curations</h3>
            <img className='hc' src="https://i.ibb.co/rFxtHnD/coffe.jpg" alt="coffe"/>
            <img className='hc'src="https://i.ibb.co/dQf1yTR/food.jpg" alt="food"/>
            <img className='hc'src="https://i.ibb.co/8KCCbQZ/powder.jpg" alt="powder" />
            <img className='hc'src="https://i.ibb.co/hRYpSrm/merchandise.jpg" alt="merchandise"/>
            <img className='hc' src="https://i.ibb.co/FnKzWwg/chocolates.jpg" alt="chocolates"/>
            <span className="first-caption">Drinks</span>
            <span className="caption">Food</span>
            <span className="caption">Coffee at Home</span>
            <span className="caption">Merchandise</span>
            <span className="caption">Ready to eat</span>
        </div>
        </>
    )
}

export default Handcraft;
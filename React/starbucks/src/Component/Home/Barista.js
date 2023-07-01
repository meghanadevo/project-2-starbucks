import React from 'react';
import {Link} from 'react-router-dom';
import './Barista.css';
const Barista = () =>{
    return(
        <>
      <div className="Barista">
            <div className="BR-header">
            <h3  className="Baristaheading">Barista Recommends</h3>
            <button type="submit">View more</button>
        </div>
        <div className="tile">
        <div className="BR"><img className="BR-img" src="https://i.ibb.co/k6p2jRx/java-2.jpg" alt="java-2" border="0"/>
        <img className="veg-logo" src="https://i.ibb.co/TLKgXrC/veg-logo.jpg" alt="veg-logo" border="0"/>
                <span className="BR-span">Java-chip-Frappucino</span>
                <span className="BR-span-sub">TALL(354 ml) 354 KCal</span>
                <div className="BR-span2"><span className="span-below">₹351.75</span>
                    <button type="button"className="Baristabutton"><Link to='/SampleConnect'>Add item</Link></button>
                </div>
            </div>
            <div className="BR"><img  className="BR-img" src="https://i.ibb.co/8XVGn4z/cold-coffee.jpg" alt="cold-coffee" border="0"/>
            <img className="veg-logo" src="https://i.ibb.co/TLKgXrC/veg-logo.jpg" alt="veg-logo" border="0"/>
                <span className="BR-span">Cold-Coffee</span>
                <span className="BR-span-sub">TALL(354 ml) 354 KCal</span>
                <div className="BR-span2"><span className="span-below">₹351.75</span>
                    <button type="button"className="Baristabutton"><Link to='/SampleConnect'>Add item</Link></button>
                </div>
            </div>
            <div className="BR"><img className="BR-img" src="https://i.ibb.co/q7WzwFV/brew.jpg" alt="brew"/>
            <img className="veg-logo" src="https://i.ibb.co/TLKgXrC/veg-logo.jpg" alt="veg-logo" border="0"/>
                <span className="BR-span">Vanilla Sweet cream Cold brew</span>
                <span className="BR-span-sub">TALL(354 ml) 354 KCal</span>
                <div className="BR-span2"><span className="span-below">₹383.75</span>
                    <button type="button"className="Baristabutton"><Link to='/SampleConnect'>Add item</Link></button>
                </div>
            </div>
          </div>
        </div>
        </>
    )
}
export default Barista





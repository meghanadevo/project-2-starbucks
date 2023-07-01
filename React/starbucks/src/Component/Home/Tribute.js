import React from 'react';
import './Tribute.css'
const Tribute = () =>{
    return(
        <>
                <div class="tribute">
               <div class="tr-1">
               <img src="https://i.ibb.co/LzRJWts/tribute.webp" alt="tribute" id="tribute-img"/>
                <p className="newpara">Presenting</p><br/>
                <p className="newpara-2">Tribute Blend Wholebean</p><br/>
                <p className="para">Medium roast blend of Coffee from four regions.Enjoy the notes of blackberry and baking spices in every sip.</p><br/>
                <p className="para">For ₹1400.00</p><br/>
                <button type="button" id="tribute-button">Order Now</button>
        </div>
        </div>
        </>
    )
}

export default Tribute;
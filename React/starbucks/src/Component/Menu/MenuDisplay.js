import React from 'react';
 import {Link} from 'react-router-dom' ;

const MenuDisplay=(props)=>{
    
    const renderData = ({MenuData}) =>{
            if(MenuData){
                if(MenuData.length>0){
                    return MenuData.map((item) =>{
                        return(
                <div className="extra-BR" key={item._id}>
                    <img className="extra-BR-img" src={item.menu_img} alt={item.item_name}/>
                    <img className="extra-veg-logo" src="https://i.ibb.co/TLKgXrC/veg-logo.jpg" alt="veg-logo"/>
                    <span className="extra-BR-span">{item.item_name}</span>
                    <span className="extra-BR-span-sub" >TALL(354 ml) 354 KCal</span>
                    <span className="extra-BR-2">  We blend mocha sauce and Frappuccino chips with Frappuccino...
                    </span>
                    <div className="extra-BR-span2"><span className="extra-span-below">₹{item.price}.00</span>
                       <Link to={`/details?itemId=${item.item_id}`}>
                        <button type="button" class="extra-barista-button">Add item</button>
                     </Link>  
                     </div> 
                   </div>
                        )
                    })
                }else{
                    return(
                        <h1>No data Found</h1>
                    )
                }
            }
            else{
                return(
                    <h2>loading.....</h2>
                )
            }
    }
    return(
       <>
        <div className="extra-tile">
           {renderData(props)}
        </div>
       </>
    )
}
export default MenuDisplay;
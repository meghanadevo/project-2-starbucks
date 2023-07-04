import React,{useState,useEffect} from 'react';
import './Handcraft.css';
import CraftDisplay from './CraftDisplay'
const base_url =  "https://starbucks-live.onrender.com";
 const Handcraft=()=>{
  const[FoodType,setFoodType] = useState();
  useEffect(()=>{
    fetch(`${base_url}/food`,{method:'GET'})
    .then((res)=>res.json())
    .then((data)=>{
        setFoodType(data)
    })
  },[])
    return(
        <>
                <div className="Handcrafted">
            <h3 id="hc-heading">Handcrafted Curations</h3>
            <CraftDisplay FoodData={FoodType}/>
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
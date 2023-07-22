import React ,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './LocSearch.css';
import {Link} from 'react-router-dom';
const base_url = "https://starbucks-live.onrender.com";
const LocSearch=()=>{
 const [location,setlocation] = useState('');
 const [RestData,setRestData] = useState('');
 let navigate = useNavigate();
 useEffect(()=>{
    fetch(`${base_url}/city`,{method:'GET'})
    .then((res)=>res.json())
    .then((data)=>{
        setlocation(data) 
    })
 },[])
 const renderCity=(data)=>{
    if(data){
       return  data.map((item)=>{
            return(
                <option key={item._id} value={item.city_id}>
                    {item.city_name}
                </option>
            )
        })
    }
 }
 const getRest=(event)=>{
    let cityId=event.target.value;
    fetch(`${base_url}/area?cityId=${cityId}`,{method:'GET'})
    .then((res)=>res.json())
    .then((data)=>{
        setRestData(data)
 })
 }
 const renderRest=(data)=>{
    if(data){
       return  data.map((item)=>{
            return(
                <option key={item.area_id} value={item.area_id}>
                    {item.area_name} | {item.city_name}
                </option>
            )
        })
    }
 }
 const search=()=>{
    navigate(`/Menu/${RestData.area_name}`)
 }
    return(
        <>
        <div className="search">
        <div className="my">
            <select id="first" onChange={getRest}>
                <option>select stores near you</option>
                {renderCity(location)}
            </select>
           </div>
        <div className="sub">
            <select id = "second">
                <option>select store</option>
                    {renderRest(RestData)}
               </select>
        </div>
    </div>
  
    <button type="submit" className="Go" onClick={search}>Search</button>
   
    <img className="cafe" src="https://i.ibb.co/xCTJ1VG/cafe-image.webp" alt="cafe-image"/>
    </>
    )
}
export default LocSearch;
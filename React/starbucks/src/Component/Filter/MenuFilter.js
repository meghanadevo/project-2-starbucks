import React from 'react';
import axios from 'axios';
import './MenuFilter.css';
const url="https://starbucks-live.onrender.com/filter";

const MenuFilter=(props)=>{
    const handleFilter=(event)=>{
        let categoryId=props.categoryId;
        let menuId = event.target.value;
        let MenuUrl="";
        if(menuId===""){
            MenuUrl= `${url}/${categoryId}`
        }
        else{
            MenuUrl = `${url}/${categoryId}?menuId=${menuId}`
        }
        axios.get(MenuUrl)
        .then((res)=>{props.ItemPerMenu(res.data)})
    }
    return(
       <>
       <div className="filter" onChange={handleFilter}>
       <div className="sub-filter">
       <label className='checkbox'>
        <input type="checkbox" name="filter" value=" "/>All 
       </label>
       </div>
        <div className="sub-filter">
       <label className='checkbox'>
        <input type="checkbox" name="filter" value="1"/>Espresso
       </label>
       </div>
       <div className="sub-filter">
       <label className='checkbox'>
        <input type="checkbox" name="filter" value="2"/>Latte Mix
       </label>
       </div>
       <div className="sub-filter">
       <label className='checkbox'>
        <input type="checkbox" name="filter" value="3"/>Sandwiches
       </label>
       </div>
       <div className="sub-filter">
       <label className='checkbox'>
        <input type="checkbox" name="filter" value="4"/>Croissants
       </label>
       </div>
       <div className="sub-filter">
       <label className='checkbox'>
        <input type="checkbox" name="filter" value="5"/>Blends
       </label>
       </div>
       <div className="sub-filter">
       <label className='checkbox'>
        <input type="checkbox" name="filter" value="6"/>Roast
       </label>
       </div>
       <div className="sub-filter">
       <label className='checkbox'>
        <input type="checkbox" name="filter" value="7"/>Cups & Mugs
       </label>
       </div>
       <div className="sub-filter">
       <label className='checkbox'>
        <input type="checkbox" name="filter" value="8"/>Tumblers
       </label>
       </div>
       <div className="sub-filter">
       <label className='checkbox'>
        <input type="checkbox" name="filter" value="9"/>Chocolates & nuts
       </label>
       </div>
       </div>
       </> 
    )
}
export default  MenuFilter;

import React,{useState,useEffect} from 'react';
import './Menu.css';
import MenuDisplay from './MenuDisplay';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {Link} from 'react-router-dom';
import MenuFilter from '../Filter/MenuFilter';


const base_url =  "https://starbucks-live.onrender.com";

const Menu=()=>{
    let params = useParams();
    const[MenuType,setMenuType] = useState();
    let catid = params.categoryid;
    useEffect(()=>{
       
        axios.get(`${base_url}/category?categoryId=${catid}`,{method:'GET'})
        .then((res)=>{
            setMenuType(res.data)
        })
      },[])
      const setDataPerFilter=(data)=>{
        setMenuType(data)
      }

     
    return(
        <>
              <div class="loc-box">
                <div class="search-box">
                    <Link to='/LocSearch'>
                    <span class="my-spans">Search Location{params.area_name}</span>
                    </Link>
                </div>
            </div>
            <div class="menu">
                <div class="menu-item"><a href="http://localhost:3000/Menu/1">Drinks</a></div>
                <div class="menu-item"><a href="http://localhost:3000/Menu/2">Food</a></div>
                <div class="menu-item"><a href="http://localhost:3000/Menu/3">Coffee at home</a></div>
                <div class="menu-item"><a href="http://localhost:3000/Menu/4">Merchandise</a></div>
                <div class="menu-item"><a href="http://localhost:3000/Menu/5">Ready to Eat</a></div>
            </div>
            <div className="my-filter">
                <MenuFilter categoryId = {catid} ItemPerMenu={(data)=>{setDataPerFilter(data)}}/>
            </div>
        <MenuDisplay MenuData={MenuType}/>
        </>
    )
}

export default Menu;
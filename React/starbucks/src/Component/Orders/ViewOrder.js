import React,{useState,useEffect} from 'react';
import DisplayOrder from './DisplayOrder';
import axios from 'axios';
const url = "https://starbucks-live.onrender.com/orders";

const ViewOrder=()=>{
const[orders,setOrder] =  useState();
useEffect(()=>{
    axios.get(url).then((res)=>{setOrder(res.data)})
})
return(
    <DisplayOrder orderData={orders}/>
)
}
export default ViewOrder;
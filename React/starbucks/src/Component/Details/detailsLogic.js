import React,{useState,useEffect} from  'react';
import './details.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useParams,useSearchParams,useNavigate} from 'react-router-dom';

const base_url = "https://starbucks-live.onrender.com";

const DetailDisplay=()=>{
    let navigate = useNavigate();
    let [searchParams] = useSearchParams();
    let [itemDetails,setitemDetails] = useState();
    let itemId = searchParams.getAll('itemId')
    const itemDetail=async()=>{
        const rdata = await axios.get(`${base_url}/details/${itemId}`)
        setitemDetails(rdata.data[0])
    }
    useEffect(()=>{
        itemDetail()
    },[])

    const addtocart=()=>{
        navigate(`/placeorder/${itemDetails.item_name}`)
    }
    const renderDetails =()=>{
        if(itemDetails){
            return(
            <>
             <div className="item-img">
                <img src={itemDetails.menu_img} alt={itemDetails.item_name}/>
             </div>
             <div className="item-desc">
                <h2 className="my-heading">Current item</h2>
                <span className="my-span">{itemDetails.item_name}</span><br/>
                <span className="my-span-sub">₹{itemDetails.price}.00</span>
                <button  className="my-button" onClick={addtocart}>Add to Cart</button>
             </div>
            </>
            )
        }
    }
    return(
        <>
        <div className="item">
           {renderDetails()}
         </div>
        </>
    )
}
    
export default DetailDisplay;
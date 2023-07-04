import React from 'react';
import {Link} from 'react-router-dom';

const CraftDisplay=(props)=>{
    const listFood = ({FoodData}) =>{
        if(FoodData){
            return FoodData.map((item)=>{
                return(
                    <Link to={`/Menu/${item.category_id}`}>
                    <img className='hc' src={item.food_img}  alt={item.name}/>  
                    </Link>
                )
            })
        }
    }

    return(
       listFood(props)
    )
}

export default CraftDisplay;
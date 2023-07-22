import React,{useState} from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './PlaceOrder.css';
const url = "https://starbucks-live.onrender.com/orders" ;


const PlaceOrder=()=>{
    let params = useParams();
    let navigate = useNavigate();
    const initialValues={
        id:Math.floor(Math.random()*100000),
        item_name:params.itemName,
        name:"",
        email:"",
        cost:Math.floor(Math.random()*1000),
        phone:"",
        address:"",
    
    };
    const[values,setValues] = useState(initialValues);

    const handleInputChange=(e)=>{
        const{name,value} = e.target;
        setValues({
            ...values,
            [name]:value,
        });
    };
  const checkout=()=>{
    console.log(values)
    fetch(url,{
        method:'POST',
        headers:{
            'accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(values)
    })
    .then (navigate(`/vieworder`))
  }

    return(
    <>
             <div className="container">
            <hr/>
            <div className="panel panel-success">
                <div className="panel-heading">
                    <h3>Order for {params.itemName}</h3>
                </div>
                <div className="panel-body">
    
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <label for="fname" className="control-label">Name</label>
                            <input className="form-control" id="fname" name = "name" value={values.name} onChange={handleInputChange}/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label for="email" className="control-label">Email</label>
                            <input className="form-control" id="email" name = "email" value={values.email} onChange={handleInputChange}/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label for="phone" className="control-label">phone</label>
                            <input className="form-control" id="phone" name = "phone" value={values.phone} onChange={handleInputChange}/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label for="address" className="control-label">address</label>
                            <input className="form-control" id="address" name = "address" value={values.address} onChange={handleInputChange}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Price:₹{values.cost}.00</h2>
                        </div>
                    </div>
                    <button className="btn btn-success" onClick={checkout}>Go</button>
                </div>
            </div>
         </div>
    </>

    )
}

export default PlaceOrder;
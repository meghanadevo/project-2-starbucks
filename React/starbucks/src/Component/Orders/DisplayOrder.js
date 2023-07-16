import React from "react";
import './DisplayOrder.css';
const DisplayOrder=(props)=>{
    const renderData = ({orderData})=>{
      if(orderData){
        return orderData.map((item)=>{
            return(
                <tr key={item._id}>
                    <td>{item._id}</td>
                    <td>{item.item_name}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>Rs.{item.cost}</td>
                    <td>{item.phone}</td>
                </tr>
            )
        })
      }
    }
return(
    <>
        <center><h3>Orders</h3></center>
        <hr/>
        <table className="my-table">
                <tr>
                    <th>OrderId</th>
                    <th>Iname</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th >Cost</th>
                    <th>Phone</th>
                </tr>
                <tbody>
                    {renderData(props)}
                </tbody>
        </table>
       
        </>
)
}
export default DisplayOrder;
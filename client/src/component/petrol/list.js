import React from "react";
import moment from "moment"


export default function List({data,ondeleteclick,totalpetrolz,oneditclick}){
return (
<div className="card p-3 mt-3">
    <h5 className="text-primary">Petrol List</h5>
   <table className="table table-bordered" border="1">
    <thead>
        <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Purpose</th>
            <th>Delete Action</th>
           
        </tr>
    </thead>
    <tbody>
        {data.map((i)=>{
            return (
                <tr key={i._id}>
                    <td>
                        {i.employee ? i.employee.name :"--"}
                    </td>
                    <td>
                        {i.amount}
                    </td>
                    <td>
                        {moment(i.date).format("YYYY-MM-DD")}
                    </td>
                    <td>
                        {i.purpose}
                    </td>
                    <td><button className="btn btn-danger" onClick={()=>ondeleteclick(i._id)}>Delete</button><button className="btn-primary btn-sn btn mx-2  " onClick={()=>oneditclick(i)} >
                        Edit
                        </button></td>
                </tr>
            )
        })}
        <tr><td>Total</td><td colSpan={4}>{totalpetrolz}</td></tr>
    </tbody>
   </table>
    </div>

)

}
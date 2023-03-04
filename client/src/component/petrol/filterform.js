import React from "react";
import Label from "../../common/label";
export default function FilterForm({name,setname,employeelist,onemployeeselect,filterdate,setfilterdate,datebydate}){
  
   return (<div className="card p-3 mt-3">
        <h3 className="text-primary">Filter Form</h3>
        <div className ="card-body">
           <div className="row">
           <div className="col form-group">
           <Label text="Employee Name" />
                <select className="form-control" onChange={(e)=>{setname(e.target.value)
                onemployeeselect(e.target.value)
                }} value={name}> 
                <option value={""}> Select employee</option>
                {employeelist && employeelist.map((hawakura)=>{
                    return <option value={hawakura._id} key={hawakura._id}>{hawakura.name}</option>
                })}
                  </select>

            </div>
       
        <div className="col form-group"> 
            
            <Label text="Date" /> <input className="form-control" type="date" value={filterdate} onChange={(e)=>{setfilterdate(e.target.value)
                datebydate(e.target.value)}} />

        </div> 
           </div>
          
        </div>

    
    </div>)
}
import React from "react";
import Button from "../../common/Button";
import Label from "../../common/label";
export  function Rajukofilterform({name,setname,onAddClick,amount,setamount,purpose,setpurpose,date,setdate,employeelist,id,reset}){
   
   return (<div>
       
        <div className="card p-3">
        <h3  className="text-primary">Petrol Form</h3>
            <div className="form-group">
            <Label text="Employee Name" />
                <select className="form-control" onChange={(e)=>setname(e.target.value)} value={name}> 
                <option value={""}> Select employee</option>
                {employeelist && employeelist.map((hawakura)=>{
                    return <option value={hawakura._id} key={hawakura._id}>{hawakura.name}</option>
                })}
                  </select>

            </div>
        <div className="form-group"> 
        <Label text="Amount" />
                <input className="form-control" type="number" min="0" value={amount} onChange={(e)=>setamount(e.target.value)} />
        </div>
        <div className="form-group">
        <Label text="Purpose" />
                 <input className="form-control" type="text" value={purpose} onChange={(e)=>setpurpose(e.target.value)} />
        </div>
        <div className="form-group"> 
        <Label text="Date" />
         <input className="form-control" type="date" value={date} onChange={(e)=>setdate(e.target.value)} />
        </div>
           <div className="mt-2 form-group">
           <Button onAddClick={onAddClick} id={id} />
            <button type="button" className="btn btn-secondary mx-2" onClick={()=>reset()}>Reset</button>
             </div>
        </div>

    
    </div>)
}
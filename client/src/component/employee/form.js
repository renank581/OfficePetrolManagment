import React from "react";
import Button from "../../common/Button";
export default function EmployeeForm({name,setname,onAddClick,id,reset,t}){
    return (<div>
        <h3>{t("empf")}</h3>
        <div>
           <div className="form-group">
           <input className="form-control" type="text" value={name} onChange={(e)=>setname(e.target.value)} />
           </div>
          <div className="form-group mt-2">
            <Button onAddClick={onAddClick} id={id} />
            <button type="button" className="btn btn-secondary mx-2" onClick={()=>reset()}>{t("reset")}</button>

          </div>
        </div>
    
    </div>)
}
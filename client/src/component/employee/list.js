import React from "react";

export default function List({data,ondeleteclick,oneditclick,t}){
return (
<div className="card p-3 mt-3">
    <h5 className="text-primary card-title">{t("emplist")}</h5>
  <div className="card-body">
  <table className="table table-striped" border="1">
    <thead>
        <tr><th>{t("name")}</th><th>{t("dse")}</th></tr>
    </thead>
    <tbody>
        {data.map((i)=>{
            return (
                <tr key={i._id}>
                    <td>
                        {i.name}
                    </td>
                    <td><button className="btn-primary btn-sn btn mx-2  " onClick={()=>oneditclick(i)} >
                    {t("edit")}
                        </button>
                        <button className="btn btn-danger"  onClick={()=>ondeleteclick(i._id)}>
                        {t("delete")}
                            </button>
                            </td>
                </tr>
            )
        })}
    </tbody>
   </table>
  </div>
    </div>

)

}
import React, { useEffect, useState } from "react"
import EmployeeForm from "./form"
import axios from "axios"
import List from "./list"
import { useTranslation, withTranslation, Trans } from 'react-i18next';
function Employee(){
  const { t, i18n } = useTranslation();
  const [data,setData]=useState([])
  const [name,setName]=useState("")
  const [toeditid,seteditid]=useState("")
  useEffect(()=>{
    getallemployees()
  },[])

  const getallemployees=async()=>{
    try {
        const url=process.env.REACT_APP_APIENDPOINT +"/api/employees"
   const res=await axios.get(url)    
   if(res.status==200){
    setData(res.data)
   } 
    } catch (error) {
        
    }
  }
   const ondeleteclick=async(userid)=>{
    try {
        const url=process.env.REACT_APP_APIENDPOINT +"/api/employees/" +userid
        const res=await axios.delete(url)    
        if(res.status==200){
        getallemployees()
        } 
        
    } catch (error) {
        
    }
   } 
const mula=async() => {
  const url=process.env.REACT_APP_APIENDPOINT +"/api/employees" 
  const reqbody={name:name}
  let res
  if(toeditid){
    const editurl=url+"/" +toeditid
    res=await axios.put(editurl, reqbody)    
  }else{
     res=await axios.post(url, reqbody)    
  }
  
  if(res.status==201 || res.status==200  ){
  getallemployees()
  resetform() 
  } 
}
const resetform=()=>{
  setName("")
  seteditid("")
  console.log("bfhsdhsh")
}


const oneditclick=({name,_id})=>{
  setName(name)
  seteditid(_id)
}
  return(
        <div className="card p-3">
           <div className="card-body">
           <h1 className="text-primary">{t("enp")}  </h1>
            <EmployeeForm name={name} setname={setName} onAddClick={mula}  id={toeditid} reset={resetform} t={t} />
            <List data={data} ondeleteclick={ondeleteclick} oneditclick={oneditclick}  t={t} />
           </div>

        </div>
    )
}
const Employee1 = withTranslation()(Employee);
export default Employee1
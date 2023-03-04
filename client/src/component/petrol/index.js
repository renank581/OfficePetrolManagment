import axios from "axios"
import moment from "moment"
import React, { useEffect, useState } from "react"
import FilterForm from "./filterform"
import {Rajukofilterform} from "./form"
import List from "./list"
export default function Petrol({}){
const [amount,setamount]=useState("")
const [purpose,setpurpose]=useState("")
const [date,setdate]=useState("")
const [name,setname]=useState("")
const [data,setData]= useState([])
const [employee,setEmployee]= useState([])
const [filtername,setfiltername]= useState("")
const [total,settotal]= useState(0)
const [filterdate,setfilterdate]= useState("")
const [toeditid,settoeditid]=useState("")
 
const oneditclick=({employee,date,purpose,_id,amount})=>{
    setamount(amount) 
    const dateset=date ? moment(new Date(date)).format("YYYY-MM-DD"):""
    setpurpose(purpose)
   
    setdate(dateset)
    settoeditid(_id)
    setname(employee ? employee._id:"")
}
const resetclick=()=>{
    setamount("") 
    setpurpose("")
   
    setdate("")
    settoeditid("")
    setname("")
}
    useEffect(()=>{
      getallpetrol()
      getallemployees()
    },[])
   
      const getallemployees=async()=>{
        try {
            const url=process.env.REACT_APP_APIENDPOINT +"/api/employees"
       const res=await axios.get(url)    
       if(res.status==200){
      
        setEmployee(res.data)
       } 
        } catch (error) {
            
        }
      }     





    const getallpetrol=async()=>{
      try {
          const url=process.env.REACT_APP_APIENDPOINT +"/api/petrols"
     const res=await axios.get(url)    
     if(res.status==200){
        setData(res.data.data)
        settotal(res.data.totalpetrol[0].total)
     } 
      } catch (error) {
          
      }
    }
     const ondeleteclick=async(userid)=>{
      try {
          const url=process.env.REACT_APP_APIENDPOINT +"/api/petrols/" +userid
          const res=await axios.delete(url)    
          if(res.status==200){
          getallpetrol()
          } 
          
      } catch (error) {
          
      }
     }  
     const onAddClick=async()=>{
        const url=process.env.REACT_APP_APIENDPOINT +"/api/petrols" 
        let res
        const reqbody={employee:name,amount,date,purpose}
        if (toeditid){
        const editurl=url+"/" +toeditid
        res=await axios.put(editurl, reqbody)
        }else{
         res=await axios.post(url, reqbody)   

        }
       
         
        if(res.status==201 || res.status==200 ){
        getallpetrol()
        resetclick()

        } 
     }
     const onemployizz=async(employeeid)=>{
        if(!employeeid){
            getallpetrol()
        }
        const url=process.env.REACT_APP_APIENDPOINT +"/api/petrols/employees/"    +employeeid
        const res=await axios.get(url)    
        if(res.status==200){
         setData(res.data.data)
         settotal(res.data.totalpetrol[0].total)
        } 
     }

     const datebydate=async(dateval)=>{
      console.log(dateval)
        if(!dateval){

            getallpetrol()
        }
        const url=process.env.REACT_APP_APIENDPOINT +"/api/petrols/getpetroldata/raju?date="    +dateval
        const res=await axios.get(url)    
        if(res.status==200){
         setData(res.data.data)
         settotal(res.data.totalpetrol[0].total)
        } 

     }
     
    return(
          <div>
              <h1>Petrol Managment</h1>
              <Rajukofilterform amount={amount} date={date} name={name} onAddClick={onAddClick} 
              purpose={purpose} setamount={setamount} setdate={setdate} setname={setname} setpurpose={setpurpose} 
              employeelist={employee} id={toeditid} reset={resetclick} />

              <FilterForm employeelist={employee} name={filtername} setname={setfiltername} onemployeeselect={onemployizz} 
              filterdate={filterdate} setfilterdate={setfilterdate} datebydate={datebydate}  />

              <List data={data} ondeleteclick={ondeleteclick} totalpetrolz={total}  oneditclick={oneditclick} /> 
          </div>
      )
  }
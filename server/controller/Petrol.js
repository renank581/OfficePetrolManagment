const Petrol = require("../model/petrol")
const mongoose=require("mongoose")
const moment=require("moment")
const savePetrolamount=async(req,res)=>{
    try {
    const {date,amount,employee,purpose}=req.body
    const tosavevalue=new Petrol({date,amount,employee,purpose})  
    const saveres=await tosavevalue.save() 
    res.status(201).json("save successfully") 
    } catch (error) {
    throw error    
    }
}
const getPetrolamountbyUserid=async(req,res)=>{
    try {
    const {userid}=req.params
    
   const totalpetrol=await Petrol.aggregate([ 
    {
 $match:{employee:mongoose.Types.ObjectId(userid)}
    },
    { 
        $group: { 
            _id: null, 
            total: { 
                $sum: "$amount" 
            } 
        } 
    } ])
    const data=await Petrol.find({employee:userid}).populate({path:"employee"})
    res.status(200).json({
        totalpetrol,data
    }) 
    } catch (error) {
    throw error    
    }
}
const getPetrolamountbydate=async(req,res)=>{
    try {
    const {date}=req.query
    const totalpetrol=await Petrol.aggregate([ 
        {
     $match:{date:{$gte: moment(new Date(date)).startOf('day').toDate(),
     $lte: moment(new Date(date)).endOf('day').toDate()}}
        },
        { 
            $group: { 
                _id: null, 
                total: { 
                    $sum: "$amount" 
                } 
            } 
        } ])
    
    const data=await Petrol.find({date:{$gte: moment(new Date(date)).startOf('day').toDate(),
    $lte: moment(new Date(date)).endOf('day').toDate(),}}).populate({path:"employee"})
    res.status(200).json({
        totalpetrol,data
    }) 
    } catch (error) {
    throw error    
    }
}
const getAllPetrolAmount=async(req,res)=>{
    try {
        const totalpetrol=await Petrol.aggregate([ 
         
            { 
                $group: { 
                    _id: null, 
                    total: { 
                        $sum: "$amount" 
                    } 
                } 
            } ])
    const data=await Petrol.find().populate({path:"employee"})
    res.status(200).json({
        totalpetrol,data
    })
    } catch (error) {
    throw error    
    }
}
const deletePetrol=async(req,res)=>{
    try {
        const {id}=req.params
        const dellist=await Petrol.findByIdAndDelete(id) 
    
        res.status(200).json("petrol deleted successfully")
        } catch (error) {
        throw error    
        }
    }
    const updatpetrol=async(req,res)=>{
        try {
            const {id}=req.params 
            const {purpose,amount,date,employee}=req.body   
            const updateRes = await Petrol.findOneAndUpdate({ _id: id }, { $set: {purpose:purpose,amount:amount,date:date,employee:employee}}, {upsert: false})
            res.status(200).json("Petrol updated successfully")
            
        } catch (error) {
        throw error    
        }}

module.exports={savePetrolamount,getPetrolamountbyUserid,getPetrolamountbydate,getAllPetrolAmount,deletePetrol,updatpetrol}
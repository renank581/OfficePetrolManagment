const Employee = require("../model/employee")
const Petrol = require("../model/petrol")

const saveEmployee=async(req,res)=>{
    try {
    const {name}=req.body
    const tosavevalue=new Employee({name})  
    const saveres=await tosavevalue.save() 
    res.status(201).json("save successfully") 
    } catch (error) {
    throw error    
    }
}
const getallemployees=async(req,res)=>{
        try {
            const employeelist=await Employee.find() 
            res.status(200).json(employeelist) 
            } catch (error) {
            throw error    
            }
        }
        const deleteemployees=async(req,res)=>{
            try {
                const {id}=req.params
                const dellist=await Employee.findByIdAndDelete(id) 
                const deletePetrol=await Petrol.deleteMany({employee:id})
                res.status(200).json("employee deleted successfully")
                } catch (error) {
                throw error    
                }
            }
            const updateemployees=async(req,res)=>{
                try {
                    const {id}=req.params 
                    const {name}=req.body   
                    const updateRes = await Employee.findOneAndUpdate({ _id: id }, { $set: {name: name}}, {upsert: false})
                    res.status(200).json("employee updated successfully")
                    
                } catch (error) {
                throw error    
                }}
module.exports={saveEmployee,getallemployees,deleteemployees,updateemployees}
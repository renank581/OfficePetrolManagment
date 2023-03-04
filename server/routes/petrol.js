const express = require("express");
const { savePetrolamount, getPetrolamountbyUserid, getPetrolamountbydate,getAllPetrolAmount, deletePetrol, updatpetrol } = require("../controller/Petrol");

const router = express.Router();

/* READ */
router.post("/", savePetrolamount);
router.get("/employees/:userid",getPetrolamountbyUserid)
router.get("/getpetroldata/raju",getPetrolamountbydate)
router.get("/", getAllPetrolAmount);
router.delete("/:id", deletePetrol);
router.put("/:id",updatpetrol);
//router.get("/", getallemployees);
//router.delete("/:id", deleteemployees);
/* UPDATE */


module.exports=router;
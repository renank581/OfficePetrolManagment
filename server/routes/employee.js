const express = require("express");
const { saveEmployee, getallemployees, deleteemployees, updateemployees } = require("../controller/employee");

const router = express.Router();

/* READ */
router.post("/", saveEmployee);
router.get("/", getallemployees);
router.delete("/:id", deleteemployees);
router.put("/:id", updateemployees);
/* UPDATE */


module.exports=router;

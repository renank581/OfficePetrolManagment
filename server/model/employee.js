let mongoose = require('mongoose');
const { Schema } = mongoose;
const employeeSchema = new Schema({
    // String is shorthand for {type: String}
    name: String,

 });
 let Employee = mongoose.model('Employee', employeeSchema); //creating a Model
 module.exports = Employee //Exporting the created module.
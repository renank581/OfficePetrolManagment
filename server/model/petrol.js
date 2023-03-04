let mongoose = require('mongoose');
const { Schema } = mongoose;
const petrolSchema = new Schema({
    // String is shorthand for {type: String}
    date: { type: Date, default: Date.now },
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
        required: true
    },
    amount: { type: Number}, purpose: { type: String}

 });
 let Petrol = mongoose.model('Petrol', petrolSchema); //creating a Model
 module.exports = Petrol //Exporting the created module.
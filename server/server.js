const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const employeeRoutes=require("./routes/employee")
const petrolRoutes=require("./routes/petrol")
//require("./config/configDb");
// config dot env file
dotenv.config();

//databse call
//connectDb();

//rest object

const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//routes
//app.use("/api/v1/users", require("./routes/userRoute"));
app.use("/api/employees", employeeRoutes);
app.use("/api/petrols", petrolRoutes);
//port
const PORT = process.env.PORT || 3001;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ADD DATA ONE TIME */
    // User.insertMany(users);
    // Post.insertMany(posts);
  })
  .catch((error) => console.log(`${error} did not connect`));

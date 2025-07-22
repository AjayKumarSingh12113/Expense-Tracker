const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDb = require("./config/connectDb");

const userroute = require("./routes/userRoute");

connectDb();
dotenv.config();
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use('/',userroute);

//user routes
app.use('/api/v1/users',require('./routes/userRoute'))

//transection routes
app.use('/api/v1/transections',require("./routes/transectionRoutes"))


const PORT = 8080 || process.env.PORT;
app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`);
    
});
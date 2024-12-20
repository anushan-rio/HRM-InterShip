import express from 'express';
import 'dotenv/config'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';


const app= express();

//DB Connection
mongoose.connect(process.env.DBURL)
    .then(() => console.log('DB is Connected!'))
    .catch(()=>console.log('Not Connected DB'))

//Middleware
app.use(bodyParser.json());


//Custom Route
import authRoutes from "./Routers/Admin/Auth.Routers.js"
//API Call
app.use("/api/v1", authRoutes);





//PORT Connection
const  port =  process.env.PORT;

app.listen(port,()=>console.log(`app is conected to the ${port}`))

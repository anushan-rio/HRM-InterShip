import express from 'express';
import 'dotenv/config'
import mongoose from 'mongoose';


const app= express();

//DB Connection
mongoose.connect(process.env.DBURL)
    .then(() => console.log('DB is Connected!'))
    .catch(()=>console.log('Not Connected DB'))


//PORT Connection
const  port =  process.env.PORT;

app.listen(port,()=>console.log(`app is conected to the ${port}`))

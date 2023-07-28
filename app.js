require('dotenv').config()
const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const path = require('path')
const helmet = require('helmet')
const errorHandler = require('./utils/errorHandler');
const mongoose = require("mongoose");
const userRoutes=require('./routes/user.route');
const categoryRoutes=require('./routes/category');
const adminRoutes=require('./routes/admin');


app.use(helmet())
app.use(bodyParser.json())



app.use((request, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type, AuthorizationToken')
    next()
})



app.use('/api/v1/user',userRoutes);
app.use('/api/v1/category',categoryRoutes);
app.use('/api/v1/admin',adminRoutes);


app.use(errorHandler.invalidEndPoint);

app.use((error, request, response, next) => {
    return response.status(250).json(errorHandler.makeErrorResponse(error))
})



let PORT = process.env.PORT || 7001
app.listen(PORT, () => {
    console.log(`🚀 Server is running at port ${process.env.PORT} successfully.`);
});

mongoose.connect(process.env.MONGO_URI).then(console.log("connected to mongoDB")).catch
((err)=>{console.log(err)});
mongoose.connection.once('open', () => {
    console.log('connected to database');
});


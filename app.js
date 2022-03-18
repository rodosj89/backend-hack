const express = require('express');
 const bodyParser = require('body-parser');  
 const app = express(); 

// load routing  
 const userRoutes = require('./routers/user');  
 const vendorRoutes = require('./routers/vendor');
 const applicationRoutes = require('./routers/application');

 app.use(bodyParser.urlencoded({ extended: false }));  
 app.use(bodyParser.json());  
 
// Configure Header HTTP 
 app.use((req, res, next) => {     
    res.header("Access-Control-Allow-Origin", "*");     
    res.header( "Access-Control-Allow-Headers","Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method");     
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");    
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");     
        next(); 
    })  

// Router basic app.use(/api/${API_VERSION},authRoutes); 
 app.use("/api/v1",userRoutes);   
 app.use("/api/v1",vendorRoutes);   
 app.use("/api/v1",applicationRoutes);   
     
module.exports = app;
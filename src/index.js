const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig');
const apiRoutes = require('./routes/index');

const setupAndstartServer = ()=>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('./api',apiRoutes);
    app.listen(PORT,()=>{
        console.log(`Server Started on port ${PORT}`)
    })
}

setupAndstartServer();
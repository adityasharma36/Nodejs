

import express from 'express'
// const express = require('express')
// const express =  require('express')

// import UAParser from "ua-parser-js";
// import from ''
// const uap = require('ua-parser-js')


import {UAParser} from 'ua-parser-js';

const app = express();
// const parse = new UAParser()
// const a = 0;

app.use(express.json());

app.get("/api/v1",(req,res)=>{
    
    const parse = new  UAParser(req.headers['user-agent']);
    
    let up = parse.getResult();

    console.log(parse.getResult());


    res.status(200).json({

        message:"GEt. Api",
        up

    })

})

app.post("/api/v1/signup",(req,res)=>{

    const detail = req.body;

    res.status(201).json({

        detail

    })

})

app.listen(3000,()=>{

    console.log('server has been started ')
    
})
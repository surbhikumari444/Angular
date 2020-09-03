const express = require('express')


let helloWorld = (req, res) => res.send("Hello Kame cho");
    let loveWorld = (req, res) => res.send("love Kame cho");

    module.exports={
        helloWorld: helloWorld,
        loveWorld: loveWorld
        
    }

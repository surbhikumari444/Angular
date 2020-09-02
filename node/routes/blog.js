const express = require('express')

let setRouter =(app)=>{
    let helloWorld = (req, res) => res.send("Hello Kame cho");
    let loveWorld = (req, res) => res.send("love Kame cho");

    app.get('/hello-World',helloWorld);
    app.get('/love-World',loveWorld);


}
module.exports={
    setRouter: setRouter
}
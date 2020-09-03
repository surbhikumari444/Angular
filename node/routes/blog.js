const express = require('express')
const app = express()
const blogControler = require('../controlers/blogControler')

let setRouter =(app)=>{

    app.get('/hello-World',blogControler.helloWorld);
    app.get('/love-World',blogControler.loveWorld);


}
module.exports={
    setRouter: setRouter
}
const express = require('express')
const app = express()
const appConfig = require('./app/appConfig')
const port = 4000
const fs = require('fs');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

let routesPath ='./routes';
fs.readdirSync(routesPath).forEach(function(file) {
  if(~file.indexOf('.js')){
    console.log('Files');
    console.log(routesPath + '/' + file);

    let route =require(routesPath + '/' + file);
    route.setRouter(app);
  }
});

app.listen(appConfig, () => {
  console.log(`Example app listening at http://localhost:${appConfig.port}`)
})
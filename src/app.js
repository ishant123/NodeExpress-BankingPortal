const fs = require('fs');
const path = require('path');
const Express = require('express');

const app = Express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use(Express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>res.render('index',{title:'Index'}));

app.listen(3000,()=>console.log('PS Application is running on Port 3000'));

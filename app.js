const  express=require('express')
const app=express();

//routes

app.use('/',require('./routes/index'));

app.listen(5000);
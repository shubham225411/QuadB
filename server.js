const express=require('express');
const app=express();
const mongoose=require('mongoose');
const axios = require('axios').default;
const Api=require('./model/api');
const path=require('path');
const seeder=require('./seed');

//connecting to databse
//
mongoose.connect("mongodb://localhost:27017/Api",{
    useNewUrlParser:true,
    // useCreateIndex:true,
    useUnifiedTopology:true
});

const db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',()=>{
    console.log("database connected");
});
  


//setting path
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));

//let res,count=0;
app.get('/',async(req,res)=>{
      seeder.fetch_data();
    const info= await Api.find({});
    res.render('home',{info})
})

app.listen(3000,()=>{
    console.log('listening at 3000');
})
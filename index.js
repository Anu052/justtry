// const express=require('express');
// const fs=require('fs');
// const { userInfo } = require('os');
// const path=require('path');
// const { emitWarning } = require('process');
// const port=80;
// const app=express();
// app.set('view engine','pug');
// app.set('views',path.join(__dirname,'views'));
// app.use(express.urlencoded());
// app.get('/',(req,res)=>{
//     const con="This is a best content of the ever";
//     const param={"title":"Pug templete","content":con};
//     res.status(202).render('index.pug',param);
// });
// app.post('/',(req,res)=>{
//     name=req.body.name;
//     age=req.body.age;
//     email=req.body.email;
//     password=req.body.password;
//     let as=`name of the customer is ${name} and number of the ${number} and email of the ${email} and password of the ${password}`;
//     fs.writeFileSync('output.txt',as);
//     const param={"message":"your website submitted "};
//     res.status(202).render('index.pug',as);
// });
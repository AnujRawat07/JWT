// jwt => jsonwebtoken 
// y 3 hisso s bnta ha  header+payload+signatures 
// header==> y ek algorithm h
// payload==> y data h jisse hmko mtlb ha 
// signatures => y signature s related data h

// tw hmaara server  cookies m string send krta ha vo hota ha jwt and vo cookie m user k data hota ha jo payload ka ander hota ha baki tw sara bekar data ha
//  jo cookies m string chipki hoti h vo user k data hota ha so server tbko smj ata h ki konsa user h kuki vo ander us string ko encrypt krta ha 

//HOW TO USE
//  require jwt 
// step1 : to store in jwt we use jwt.sign and jaidatar ham email hi store krta ha kuki vo unqiue hoti ha and sath sath m uska ham ek secret b store krta ha ab us secret k bases m data encrypt hoga and y secret itni imp chiz h ki agar vo secret mil jai tw m kisi k b data decrypt kr skta hu

// step 2 : if you want to read the data you can read it by using middleware body parser and req.cookies.token
// step 3 : to verify your jwt token we need jwt.verify(req.cookies.token."secret") and send secret along with this
const express=require('express');
const app=express();
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
const cookieParser=require('cookie-parser')


app.use(cookieParser());

app.get('/',(req,res)=>{
    //to create a token 
    let token= jwt.sign({email:"anujrawat12@gmail.com"},"secret");

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFudWpyYXdhdDEyQGdtYWlsLmNvbSIsImlhdCI6MTczMjE1NzQzOH0.LGxwYuPq90fHsFx9DK8LZbcMjWh5CwzNCc7I-5AViG4
    
//  now token is created send it in cookie
    res.cookie("token",token);     
    // console.log(token);   
    res.send('Hello form node')
})

app.get('/read',(req,res)=>{
    //reading the token
    console.log(req.cookies.token);
    res.send("read page ")
})


app.get('/verify',(req,res)=>{
    //verfiy  the token
    const token2=jwt.verify(req.cookies.token,"secret")
    console.log(token2);
    res.send("veriy page ")
})

app.listen(4000,()=>{
    console.log('server starts running')
})

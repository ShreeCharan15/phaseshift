const express=require("express");
let cors = require("cors");
const app=express();
app.use(cors());
app.listen(8000,()=>{
    console.log("set")
})
app.get('/',function(req,res){
    givenAns=req.query.answer;
    qnum=req.query.qnum;
    theme=req.query.theme;
    if(qnum==1&&givenAns=='eeshan'&&theme==1){
        res.send(true);
    }
    else
    res.send(false);
})
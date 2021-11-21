const express=require("express");
let cors = require("cors");
const compression = require('compression')
const path = require('path');
const http=require('http');

const app=express();
app.use(cors());
app.use(compression())
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

const port=process.env.PORT || 80;

app.use(express.static(__dirname+'/build'));

app.get('*', (req,res) =>{
    res.sendFile('index.html', {root: path.join(__dirname, '/build')});
});
app.get('/',function(req,res){
    const givenAns=req.query.answer;
    const qnum=req.query.qnum;
    const theme=req.query.theme;
    if(qnum===1&&givenAns==='eeshan'&&theme===1){
        res.send(true);
    }
    else
    res.send(false);
})

const server= http.createServer(app);
server.listen(port,()=>{
    console.log('server running on: '+port)
});
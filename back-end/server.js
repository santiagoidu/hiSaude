const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path')
const { env } = require('process')
const mongoose = require('mongoose')

const app = express();
const uri = "mongodb+srv://saudeHi:HaekZLeaJy4IJnPP@cluster0.mrzzz.mongodb.net/<dbname>?retryWrites=true&w=majority"
const port = process.env.PORT || 5000

mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}, function (err){
    if(err){
        console.log(err)
    }else{
        console.log('MongoDB Conectado com sucesso')
    }
})

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.get('/', function(req, res){
    res.json({message: "Hello Word"})
});

app.listen(port, function(){
    console.log(`Server runing on port ${port}`)
})
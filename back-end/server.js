const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path')
const { env } = require('process')
const mongoose = require('mongoose')
const routes = require('./src/routes')
const {APP_URL} = require('./src/.ENV')

const app = express();
const uri = "mongodb+srv://saudeHi:HaekZLeaJy4IJnPP@cluster0.mrzzz.mongodb.net/<dbname>?retryWrites=true&w=majority"
const port = APP_URL || 5000

mongoose.connect(uri, { 
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}, function (err){
    if(err){
        console.log(err)
    }else{
        console.log('MongoDB conectado com sucesso')
    }
})

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(routes);

app.listen(port, function(){
    console.log(`Server runing on port ${port}`)
})
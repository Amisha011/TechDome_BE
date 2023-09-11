const express = require('express')
const app = express()
const cors=require('cors')
const mongoose  = require('mongoose')
const PORT =  7000
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });
const MONGO_USERNAME = process.env.MONGO_USERNAME
const MONGO_PASSWORD = process.env.MONGO_PASSWORD
const MONGO_DB_NAME= process.env.MONGO_DB_NAME
//const {MONGOURI} = require('./config/keys')
const dbUrl=`mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.dujaf.mongodb.net/${MONGO_DB_NAME}?retryWrites=true&w=majority`
console.log(MONGO_USERNAME)
app.use(cors())
mongoose.connect(dbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology: true

})
mongoose.connection.on('connected',()=>{
})
mongoose.connection.on('error',(err)=>{
})

require('./models/user')
require('./models/LoanDetails')

app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/loan'))
//app.use(require('./routes/user'))


// if(process.env.NODE_ENV=="production"){
//     app.use(express.static('client/build'))
//     const path = require('path')
//     app.get("*",(req,res)=>{
//         res.sendFile(path.resolve(__dirname,'client','build','index.html'))
//     })
// }

app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})


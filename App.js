//require('dotenv').config();
const express = require('express')
const app = express()
const cors=require('cors')
const mongoose  = require('mongoose')
const PORT =  7000
//const dotenv = require('dotenv');
// dotenv.config({ path: './.env' });
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(__dirname, '.env') });


const dbUrl=process.env.MONGODB_URI


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

app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})


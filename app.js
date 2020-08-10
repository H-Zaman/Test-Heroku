const express = require('express')
const app = express()

const PORT = process.env.PORT || 8080
const HOST = process.env.HOST ||'localhost'


app.get('/', (req, res)=>{
    res.send('Updated')
})

// listen
app.listen(PORT,()=>{
    console.log('SERVER ONLINE @'+HOST+' : '+PORT)
})
const express = require('express')
const app = express()

const PORT = process.env.PORT || 8080
const HOST = process.env.HOST ||'localhost'


app.get('/:data', (req, res)=>{
    const data = req.params.data
    res.send(data)
})

// listen
app.listen(PORT,()=>{
    console.log('SERVER ONLINE @'+HOST+' : '+PORT)
})

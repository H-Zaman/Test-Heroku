const express = require('express')
const app = express()
const morgan = require('morgan')

const PORT = process.env.PORT || 8080
const HOST = process.env.HOST ||'localhost'

app.use(morgan('tiny'))

app.get('/', (req, res)=>{
    res.send('Home')
})

app.get('/:data', (req, res)=>{
    const data = req.params.data
    res.send(data)
})

// listen
app.listen(PORT,()=>{
    console.log('SERVER ONLINE @'+HOST+' : '+PORT)
})

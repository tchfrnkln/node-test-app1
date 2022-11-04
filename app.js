const express = require('express')


const app = express()
const port = process.env.PORT || 3000



app.get('', (req, res) => {
    console.log("i was here")
    res.send('Hello world, this is a nodejs')
})



app.listen(port, ()=> console.log(`listing on port ${port}`))



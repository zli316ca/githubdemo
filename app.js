const express = require('express')

const app = express()



app.get("/", (req, res) => {

   
    res.send("Welcome Zhongyao LI!!!")

 
})

app.listen(2500, () => {
    console.log("<-----------App is Listening at Port 2500!!!!!!!!!!!!!!!!!!!--->")
})
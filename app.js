/********************************************************************************* 
*  WEB322 – Assignment 6 
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.   
*  No part of this assignment has been copied manually or electronically from any other source 
*  (including web sites) or distributed to other students. 
*  
*  Name: ______zhongyao Li_ Student ID: ____153743216__________ Date: _____2022 /12/12___________ 
* 
*  Online (Cyclic) URL: _____https://enthusiastic-waistcoat-dove.cyclic.app/__________________________________________________ 
* 
********************************************************************************/  



const express = require('express')

const app = express()



app.get("/", (req, res) => {

   
    res.send("Welcome Zhongyao LI student id is 153743216!!!")

 
})

app.listen(2500, () => {
    console.log("<-----------App is Listening at Port 2500!!!!!!!!!!!!!!!!!!!--->")
})
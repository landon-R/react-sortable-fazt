const express = require('express')
const mongoose=  require('mongoose')

const app = express()

app.listen(4000, () => {

    console.log("server on port 4000");
    
} )
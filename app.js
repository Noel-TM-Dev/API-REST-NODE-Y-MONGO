
require("dotenv").config()
const express = require("express")
const cors =  require("cors")
const dbConnection = require("./config/mongo")
const app = express()

app.use(cors())


const port = process.env.PORT || 3000;

/* 
  ** Routes **
*/
app.use('/api',require("./routes"))



app.listen(port,() => {
   console.log(`aplicacion corriendo por http://localhost:${port}`)
})


dbConnection();
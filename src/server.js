const app = require("./index")
const connect = require("./config/db")

app.listen(3500,async()=>{
    await connect();
     console.log("Connect to port 3500")
})
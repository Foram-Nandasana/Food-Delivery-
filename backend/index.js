const express = require('express')
const app = express()
const port = 5000
const mongoDB = require("./db")

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header(
    "Access-Contral-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})
app.get('/',(req,res) => {
  res.send('Hello world!')
})
mongoDB();

app.use(express.json())
app.use('/api', require("./Routes/CreateUser")) //further code of this is in routes(CreateUser)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
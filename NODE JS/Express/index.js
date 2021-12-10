const express = require('express')
const path = require('path')

const app = express();

// app.use("/meusite", express.static(path.join(__dirname, 'client')))

app.get("/",(req, res)=>{
    // res.set("Content-Type", "text/plain")
    // res.type("txt")
    res.send("<h1>hello from WORD</h1>")
})

// app.post("/",(req, res)=>{
    
//     res.send("<h1>hello from post</h1>")
// })
// app.put("/",(req, res)=>{
    
//     res.send("<h1>hello from put</h1>")
// })
// app.delete("/",(req, res)=>{
    
//     res.send("<h1>hello from delete</h1>")
// })

const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`Server Runnig on Port: ${PORT}`)
})
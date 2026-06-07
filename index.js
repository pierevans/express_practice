import express from 'express'
// import { rmSync } from 'node:fs'
const app = express()
const port = 8000


// app.get("/" ,(req, res)=> {
//     res.send("Home")
// })

// app.get("/about" ,(req, res)=> {
//     res.send("About page")
// })

// app.get('Contact', ()=> {
//     res.send("Contact page")
// })


// app.get("/students",(req, res)=> {
//     res.send("get students")
// })
// app.post("/students",(req, res)=> {
//     res.send("add students")
// })
// app.put("/students",(req, res)=> {
//     res.send("update students")
// })
// app.delete("/students",(req, res)=> {
//     res.send("delete students")
// })


// app
//     .route("/students")
//     .get((req, res)=> res.send("get students"))
//     .post((req, res)=> res.send("add students"))
//     .put((req, res)=> res.send("update students"))
//     .delete((req, res)=> res.send("delete students"))
    



app.listen(port ,()=> console.log(`The server is listening at port ${port}...`))
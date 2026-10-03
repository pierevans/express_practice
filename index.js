import express from 'express'


const app = express()
const port = 8000





app.listen(port ,()=> console.log(`The server is listening at port ${port}...`))
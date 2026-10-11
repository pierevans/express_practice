import express from "express";
// import students from "./routes/students.js"
// import teachers from "./routes/teachers.js"

const app = express();
const port = 8000;

console.clear();

//! Basics//

// app.get("/", (req, res) => {
//   res.send("All students");

// });
// app.post("/", (req, res) => {
//   res.send("Add new student");

// });
// app.put("/", (req, res) => {
//   res.send("update student");

// });
// app.delete("/", (req, res) => {
//   res.send("delete student");

// });

//! app route

// app
//   .route("/students")
//   .get((req, res) => res.send("All students"))
//   .post((req, res) => res.send("Add new student"))
//   .put((req, res) => res.send("update student"))
//   .delete((req, res) => res.send("Delete student"));

/*// ! Express router

1. Create routes folder and put routes in in a separate file 
2. Create instance of express.Router()
3. Use router instead of app
4. Export and import router
5. use app.use built-in middleware and provide routes

app.use("/students", students)
app.use("/teachers", teachers)
*/ 


/*//! Route params
// app.get("/ecom/products/iphone/:model", (req, res)=> {
//   const model = req.params.model
//   res.send(`Iphone ${model} Pro Max`)
// })
*/

//! Query Strings

//! Middleware

app.listen(port, () =>
  console.log(`The server is listening at port ${port}...`),
);

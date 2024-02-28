import express from "express"
import mongoose from "mongoose"
import User from "./models/User.js"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())
const port ="3000"

mongoose.connect("mongodb+srv://pratik:<password>@cluster0.rwn3swb.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log("Mongodb connected"))
.catch((err) => console.error(err))

// app.get("/api/user",async (req,res)=>{
//     const users = await User.find()
//     res.json(users)
// })

app.post("/api/user", async (req,res)=> {
    const user = await User.create(req.body)
    .then((user) => res.json(user) )
    .catch((err) => res.json("Error :: Failed to create user"))
})

app.post("/api/user/auth", async (req,res) => {
    await User.findOne(req.body)
    .then((user) => res.json(user))
    .catch((err) => console.log(err))
    })

// app.get("/api/user/payment",(req,res)=>{
//     res.json({
//         cardNumber:"123",
//         expiryDate:"14-01-24",
//         cvv:"548798653254"
//     })
// })

// app.get("/api/user/contact",(req,res)=>{
//     res.json({
//         name:"Pratik Banik",
//         email:"Pratik@gmail.com",
//         message:"its working"
//     })
// })

// app.get("/api/user/location",(req,res)=>{
//     res.json({
//         location:"Siliguri"
//     })
// })



app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})
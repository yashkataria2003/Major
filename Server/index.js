import express, { urlencoded } from "express"
import connectDB from "./database/index.js"
import dotenv from 'dotenv'
import cors from 'cors'

import studentRoute from './routes/studentRoute.js'
import teacherRoute from './routes/teacherRoute.js'

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json());

app.use('/api/v1/students', studentRoute)
app.use('/api/v1/teachers', teacherRoute)

app.use(express.urlencoded({extended: false}))

const startServer = async () => {
    try {
        await connectDB(process.env.VITE_MONGO_URL)
        app.listen(4000, () => console.log('Server has started on port http://localhost:4000'))
    }

    catch (error) {
        console.log(error)
    }
}

app.get("/", (req, res) => {
    res.send("Sending data to '/'")
})

startServer()


import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'
import connectDB from './config/db.js'
import authRoute from './routes/authRoute.js'

dotenv.config()

//db con
connectDB()

const app = express()
app.use(express.json())
app.use(morgan('dev'))


app.use('/api/v1/auth', authRoute)

app.get('/', (req, res) => {
    res.send('<h1>welcome to e-commerce app</h1>')
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server Running on ${process.env.PORT} mode on ${PORT}`.bgRed.black);

})
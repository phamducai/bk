import express from "express";
import Connectiondb from './Database/Connetiondb.js';
import Routes from "./routes/Router.js"
import bodyParser from 'body-parser'
import cors from 'cors'


const app = express()
const PORT = 8000
//ket noi database
Connectiondb()
app.use(cors())
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Routes)
app.listen(PORT, () => console.log(`server running ${PORT}`))

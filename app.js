import express from "express"
import cors from "cors"
import http from "http"
import router from "./route/route.js"
import connectMongo from "./db/init.js"
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fileUpload from "express-fileupload"

const __filename = fileURLToPath(import.meta.url);
const app= express()
const httpServer= http.createServer(app)

connectMongo()
app.options('*', cors())
app.use(cors())
app.use(fileUpload({
    createParentPath: true
}));

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(router)

httpServer.listen(4000, ()=> console.log("Server run on port 4000"))
import  express  from "express";
const app= express()
import connectDB from "./db/connectdb.js";
import {join} from "path";
import web from "./routes/web.js"
const port= process.env.PORT || '3000'
const DATABASE_URL= process.env.DATABASE_URL || "mongodb://localhost:27017"

connectDB(DATABASE_URL)


app.use(express.urlencoded({extended:false}))

app.use('/student',express.static(join(process.cwd(),"public")))
app.use('/student/edit',express.static(join(process.cwd(),"public")))


app.set("view engine","ejs")

app.use('/student',web)

app.listen(port,()=>{
   console.log(`Server is listening at: http://localhost:${port}`)
})
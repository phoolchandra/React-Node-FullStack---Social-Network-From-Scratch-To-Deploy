const express = require("express")
const mangoose = require("mongoose")
const app = express();
const morgan = require("morgan")
const dotenv = require("dotenv")
const bodyParser = require("body-parser")
const expressValidator = require("express-validator")

dotenv.config()

//db 
//MONGO_URI=mongodb://localhost/nodeapi
mangoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useCreateIndex:true,
    useFindAndModify: true,
    useUnifiedTopology: true
 }).then(() => console.log("db connected"));

mangoose.connection.on("error", err => {
    console.log(`DB connection error: ${err.message}`);
});
const postRouts = require("./routes/post");

// const MyOwnmiddleware = (req, res, next) => {
//     console.log(" MyOwnmiddle ware is applied");
//     next();
// };

app.use(morgan("dev"));
// app.use(MyOwnmiddleware);
app.use(bodyParser.json());
app.use(expressValidator());
app.use("/", postRouts);

// middle ware



const port = process.env.PORT || 8080;
const r = 3
app.listen(port, () => {console.log(`the value is ${port}`)});
// app.listen(3000);
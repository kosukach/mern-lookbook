import express from "express"
import "express-async-errors"
import mongoose from "mongoose"
import config from "config"
import cors from "cors"
import tees from "./routers/teeRouter.js"
import hoodies from "./routers/hoodieRouter.js"
import path from "path"

const app = express();


mongoose.set('useUnifiedTopology', true);

app.use(express.json());
app.use(cors());
app.use("/tees", tees);
app.use("/hoodies", hoodies);



mongoose.connect(process.env.MONGODB_URI ||config.get("db"), { useNewUrlParser: true })
  .then(() => console.log(`Connected to ${config.get("db")}...`))
  .catch((ex)=> console.log(ex));

let port = process.env.PORT || 8080;
app.listen(port, ()=> {console.log(`listening on port ${port}...`)})

if(process.env.NODE_ENV == "production"){
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'dist', 'index.html'));
  });  
}

app.use(express.static("public/dist"));


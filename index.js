import express from "express"
import "express-async-errors"
import mongoose from "mongoose"
import config from "config"
import cors from "cors"
import tees from "./routers/teeRouter"
import hoodies from "./routers/hoodieRouter"

const app = express();


mongoose.set('useUnifiedTopology', true);

app.use(express.json());
app.use(cors());
app.use("/tees", tees);
app.use("/hoodies", hoodies);



mongoose.connect(config.get("db"), { useNewUrlParser: true })
  .then(() => console.log(`Connected to ${config.get("db")}...`))
  .catch((ex)=> console.log(ex));

if(process.env.NODE_ENV == "production"){
  app.use(express.static("public/dist/"));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'dist', 'index.html'));
  });
}

let port = 5000;
app.listen(port, ()=> {console.log(`listening on port ${port}...`)})
import express from "express";
import Hoodie from "../models/hoodie.js";
import { validateItem } from "../models/item.js";
const router = express.Router();

router.get("/", async (req, res) => {
    const hoodies = await Hoodie.find().sort({id:1});
    res.send(hoodies);
});

router.post("/", async (req, res) => {
    const { error } = validateItem(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    const hoodies = await Hoodie.find().sort({id: 1});
    let id;
    if(hoodies.length > 0){
        id = hoodies[hoodies.length - 1].id + 1
    }else{
        id = 0
    }
    let hoodie = new Hoodie({
        id: id,
        name: req.body.name,
        availableSizes: req.body.availableSizes,
        imageName: req.body.imageName,
        closeupImageName: req.body.closeupImageName
    })
    
    hoodie = await hoodie.save();
    res.send(hoodie);
})
router.put("/", async (req, res) => {
    let hoodies = await Hoodie.find();
    res.send(hoodies.map( async (hoodie) => {
        hoodie.availableSizes = {
            "XS": true,
            "S": true,
            "M": true,
            "L": true,
            "XL": true
        }
        return await hoodie.save()
    }))

})
export default router;
const express = require("express");
const { Tee } = require("../models/tee");
const { validateItem } = require("../models/item");
const router = express.Router();

router.get("/", async (req, res) => {
    const tees = await Tee.find().sort({id:1});
    res.send(tees);
});

router.post("/", async (req, res) => {
    const { error } = validateItem(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    const tees = await Tee.find().sort({id: 1});
    let id;
    if(tees.length > 0){
        id = tees[tees.length - 1].id + 1
    }else{
        id = 0
    }
    let tee = new Tee({
        id: id,
        name: req.body.name,
        availableSizes: req.body.availableSizes,
        imageName: req.body.imageName,
        closeupImageName: req.body.imageName
    })
    
    tee = await tee.save();
    res.send(tee);
})

module.exports = router;
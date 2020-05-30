import mongoose from "mongoose";
import Joi from "@hapi/joi";
const itemSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        maxlength: 30,
        minlength: 3,
        required: true
    },
    availableSizes: {
        type: Object,
        maxlength: 10,
        minlength: 1,
        required: true
    },
    imageName: {
        type: String,
        required: true
    },
    closeupImageName: {
        type: String,
        required: true
    }
});

function validateItem(tee){
    const schema = {
        id: Joi.number(),
        name: Joi.string().required(),
        availableSizes: Joi.object().required(),
        imageName: Joi.string().required(),
        closeupImageName: Joi.string().required()
    };
    return Joi.validate(tee, schema);
};

//export let validateItem = validateItem;
//export let itemSchema = itemSchema;
export {validateItem as validateItem, itemSchema as itemSchema}
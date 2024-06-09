import mongoose from "mongoose";

const {Schema} = mongoose

const itemSchema = new Schema({
    printer: {
        type: String,
        unique: true,
        required: true,
    },
    itemName: {
        type: String,
        unique: true,
        required: true,
    },
    itemValue: {
        type: Number, 
        required: true,
    },
    code: {
        type: Number, 
        required: true,
    },
}, {timestamps: true})

let itemModel
try {
    itemModel = mongoose.model('Item')
} catch (error) {
    itemModel = mongoose.model('Item', itemSchema)
}
export default itemModel
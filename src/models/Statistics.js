import mongoose from "mongoose";

const {Schema} = mongoose

const statisticsSchema = new Schema({
    user: {
        type: String,
        required: true,
    },
    count: {
        type: Number,
        required: true,
    },
    
}, {timestamps: true})

let statisticsModel
try {
    statisticsModel = mongoose.model('Statistics')
} catch (error) {
    statisticsModel = mongoose.model('Statistics', statisticsSchema)
}
export default statisticsModel
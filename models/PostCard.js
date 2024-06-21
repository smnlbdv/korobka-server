import mongoose, { Types } from 'mongoose'

const shema = new mongoose.Schema({
    photo: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    count: {
        type: Number,
        default: 200
    }
})


export default mongoose.model('PostCard', shema)
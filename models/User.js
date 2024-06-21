import mongoose, { Types } from 'mongoose'

const shema = new mongoose.Schema({
    avatarUser: {
        type: String,
        default: 'http://server.korobkabel.site/avatar/default-avatar.svg'
    },
    role: {
        type: Types.ObjectId,
        default: "664a259b42c1f7dd7863fe93",
        ref: 'Role',
    },
    name: {
        type: String,
        default: 'Пользователь',
        required: true,
    },
    surname: {
        type: String,
        default: '',
        required: true,
    },
    email: {
        type: Types.ObjectId, 
        required: true,
        unique: true,
        ref: 'Email'
    },
    passwordHash: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        default: '',
        required: true
    },
    order: [{
        type: Types.ObjectId, 
        ref: 'Order',
        default: []
    }],
    orderConstructor: [{
        type: Types.ObjectId, 
        ref: 'Constructor_order',
        default: []
    }],
    cart: {
        type: Types.ObjectId,
        ref: 'Cart',
        default: null
    },
    favorite: {
        type: Types.ObjectId,
        ref: 'Favorite',
        default: null
    },
    isActivated: {
        type: Boolean,
        default: false
    },
    activationLink: {
        type: String,
    } 
})

export default mongoose.model('User', shema)
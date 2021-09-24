import mongoose from "mongoose"

const Schema = mongoose.Schema;

const MenuSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    img: String,
    description: String,
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    }
})

const Menu = mongoose.model('Menu', MenuSchema);

export { Menu }
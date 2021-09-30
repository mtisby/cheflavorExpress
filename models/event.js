import mongoose from "mongoose"

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    dateSelected: {
        type: String,
        required: true
    },
    timeSelected: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true,
        minlength: 10
    }
})

const Event = mongoose.model('Event', eventSchema);

export { Event }
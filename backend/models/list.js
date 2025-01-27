const mongoose = require('mongoose');


const listSchema = new mongoose.Schema({
    title: {
        type: String,
        rrquired: true
    },
    body: {
        type: String,
        required: true
    },
    user: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ]
});

module.exports = mongoose.model("List", listSchema);
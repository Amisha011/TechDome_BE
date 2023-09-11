const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    userType:
    {
        type: String,
        default:"user"
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    resetToken: String,
    expireToken: Date,
}, {
    timestamps: true
}
)

mongoose.model("User", userSchema)
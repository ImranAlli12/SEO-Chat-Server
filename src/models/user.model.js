const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: { type:String, required: true, unique:true },
    password:{type: String, required: true},
    pic:{type:String,required: true, default: "https://res.cloudinary.com/dowzkkkon/image/upload/v1710486280/file_1_kghsgh.jpg"}
},{
    timestamps: true
});

const User = mongoose.model("User", userSchema)

module.exports = User;
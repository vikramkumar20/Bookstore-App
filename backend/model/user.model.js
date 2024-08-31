// This file is related to login, logout and register related functionalities.

import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
    
})

// Now,making a model for the above schema.
const User= mongoose.model("User",userSchema);

export default User;

// Now, we will define controller for this schema, which is in the file, user.controller.js
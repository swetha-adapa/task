const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    title: String,
    is_completed:Boolean
    
});

const userModal = mongoose.model("user", userSchema);

module.exports = userModal;
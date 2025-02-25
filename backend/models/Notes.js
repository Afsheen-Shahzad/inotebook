const mongoose = require('mongoose');

//const mongoose = require('mongoose');
const {Schema} = mongoose;
const NotesSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,  //it is a forien key(id in users database table)
        ref: 'user'  ///came from the models/user.js file
    },
    title: {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    tags: {
        type: String,
        default: "General"
    },
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('notes',NotesSchema);
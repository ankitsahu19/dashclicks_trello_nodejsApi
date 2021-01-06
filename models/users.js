const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var TaskSchema = new Schema({
    task:  {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const userSchema = new Schema({                         // Model : storing the data in MongoDb
    name: {
        type: String,
        required: true
    },
    tasks:[TaskSchema]
}, {
    timestamps: true
});

var User = mongoose.model('User', userSchema);

module.exports = User;
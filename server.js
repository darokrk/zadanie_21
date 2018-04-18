const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nodeappdatabase', {
    useMongoClient: true
});

const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: String,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    admin: Boolean
});

const User = mongoose.model('User', userSchema);

userSchema.methods.manify = function(next) {
    this.name = this.name + '-boy';

    return next(null, this.name);
};
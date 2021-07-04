const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
    date: { type: Date, default: Date.now },
    likes: { type:Number, default: 0 },
    owner: { type: Types.ObjectId, ref: 'user' },
    filename: { type: String },
    filepath: { type: String }
});

module.exports = model('Gifs', schema);

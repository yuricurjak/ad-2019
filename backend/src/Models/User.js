import { Schema, model } from 'mongoose';

const schema = new Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    friend: {
      type: String,
    },

}, {
    timestamps: true,
});

const User = model('User', schema);

export default User;
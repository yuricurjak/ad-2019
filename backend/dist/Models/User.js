"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose');

const schema = new (0, _mongoose.Schema)({
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

const User = _mongoose.model.call(void 0, 'User', schema);

exports. default = User;
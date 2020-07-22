"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);
require('dotenv/config');

const mongodbUrl = process.env.MONGO_URL;

const connect = () =>
  _mongoose2.default.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

exports. default = {
  connect,
  connection: _mongoose2.default.connection
};

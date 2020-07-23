"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _Routes = require('./Routes'); var _Routes2 = _interopRequireDefault(_Routes);
var _Database = require('./Database'); var _Database2 = _interopRequireDefault(_Database);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);


class Configure {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
    this.app.database = _Database2.default;
  }

  middlewares() {
    this.app.use(_express2.default.json());
    this.app.use(_cors2.default.call(void 0, ));
  }

  routes() {
    this.app.use("/", _Routes2.default);
  }
}

exports. default = async () => {
  const { app } = new Configure();
  await app.database.connect();

  return app;
};

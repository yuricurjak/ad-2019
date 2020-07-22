"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _users = require('./users'); var _users2 = _interopRequireDefault(_users);
var _draw = require('./draw'); var _draw2 = _interopRequireDefault(_draw);

const router = _express2.default.Router();

router.use('/users', _users2.default);
router.use('/draw', _draw2.default);

exports. default = router;

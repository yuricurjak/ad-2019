"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _Draw = require('../Controllers/Draw'); var _Draw2 = _interopRequireDefault(_Draw);
var _User = require('../Models/User'); var _User2 = _interopRequireDefault(_User);
var _generateDraw = require('../Services/generateDraw'); var _generateDraw2 = _interopRequireDefault(_generateDraw);
var _sendMail = require('../Services/sendMail'); var _sendMail2 = _interopRequireDefault(_sendMail);
var _auth = require('../Middlewares/auth'); var _auth2 = _interopRequireDefault(_auth);


const router = _express2.default.Router();
const drawController = new (0, _Draw2.default)(_User2.default, _generateDraw2.default, _sendMail2.default);

router.post('/', _auth2.default, (req, res) => drawController.create(req, res));

exports. default = router;

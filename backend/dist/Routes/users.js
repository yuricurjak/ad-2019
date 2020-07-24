"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _Users = require('../Controllers/Users'); var _Users2 = _interopRequireDefault(_Users);
var _User = require('../Models/User'); var _User2 = _interopRequireDefault(_User);
var _auth = require('../Middlewares/auth'); var _auth2 = _interopRequireDefault(_auth);


const router = _express2.default.Router();
const usersController = new (0, _Users2.default)(_User2.default);

router.get('/', _auth2.default, (req, res) => usersController.get(req, res));
router.get('/:id', _auth2.default, (req, res) => usersController.getById(req, res));
router.post('/', _auth2.default, (req, res) => usersController.create(req, res));
router.put('/:id', _auth2.default,  (req, res) => usersController.update(req, res));
router.delete('/:id', _auth2.default, (req, res) => usersController.remove(req, res));

exports. default = router;

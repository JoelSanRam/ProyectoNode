"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _multer = _interopRequireDefault(require("multer"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const storage = _multer.default.diskStorage({
  destination: './frontend/public/uploads/',

  filename(req, file, cb) {
    cb(null, `${Date.now()}${_path.default.extname(file.originalname)}`);
  }

});

const upload = (0, _multer.default)({
  storage: storage
});

const router = _express.default.Router();

router.post('/', upload.single('image'), (req, res) => {
  res.send(`/${req.file.filename}`);
});
router.put('/', upload.single('pdf'), (req, res, next) => {
  res.send(`/${req.file.filename}`);
});
var _default = router;
exports.default = _default;
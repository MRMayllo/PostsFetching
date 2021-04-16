"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _api = require("./api");

function onLoad(_x) {
  return _onLoad.apply(this, arguments);
}

function _onLoad() {
  _onLoad = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(callback) {
    var fetchedPost, fetchedCommentsOfPost, fetchedReactionsOfComment;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _api.fetchPost)();

          case 3:
            fetchedPost = _context.sent;
            _context.next = 6;
            return (0, _api.fetchCommentsOfPost)("55573462-be31-55df-901f-36603d3894e4");

          case 6:
            fetchedCommentsOfPost = _context.sent;
            _context.next = 9;
            return (0, _api.fetchReactionsOfComment)("55573462-be31-55df-901f-36603d3894e4");

          case 9:
            fetchedReactionsOfComment = _context.sent;
            callback(fetchedPost);
            _context.next = 13;
            return (0, _api.wait)(2000);

          case 13:
            callback(fetchedCommentsOfPost);
            _context.next = 16;
            return (0, _api.wait)(2000);

          case 16:
            callback(fetchedReactionsOfComment);
            _context.next = 22;
            break;

          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](0);
            throw new Error(_context.t0);

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 19]]);
  }));
  return _onLoad.apply(this, arguments);
}

onLoad(function (result) {
  return console.log(result);
});
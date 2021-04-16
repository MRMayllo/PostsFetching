"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchPost = fetchPost;
exports.fetchCommentsOfPost = fetchCommentsOfPost;
exports.fetchReactionsOfComment = fetchReactionsOfComment;
exports.wait = wait;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _postData = _interopRequireDefault(require("../postData.json"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function fetchPost() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (_postData["default"]) {
        var newData = _postData["default"].map(function (post) {
          var postClone = _objectSpread({}, post);

          if (postClone.comments) {
            delete postClone.comments;
          }

          return postClone;
        });

        resolve(newData);
      } else {
        reject("can`t fetch post");
      }
    }, 1000);
  });
}

function fetchCommentsOfPost(id) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      var foundData = _postData["default"].find(function (post) {
        return id === post.id;
      });

      if (foundData && foundData.comments) {
        var commentsArray = foundData.comments.map(function (post) {
          var postClone = _objectSpread({}, post);

          if (postClone.reactions) {
            delete postClone.reactions;
          }

          return postClone;
        });
        resolve(commentsArray);
      } else {
        reject('post does not have comments');
      }
    }, 2000);
  });
}

function fetchReactionsOfComment(id) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      var foundData = _postData["default"].find(function (post) {
        return id === post.id;
      });

      if (foundData && foundData.comments) {
        var reactionsArray = foundData.comments.reduce(function (agr, calc) {
          var calcClone = _objectSpread({}, calc);

          return calcClone.reactions ? [].concat((0, _toConsumableArray2["default"])(agr), (0, _toConsumableArray2["default"])(calcClone.reactions)) : agr;
        }, []);
        resolve(reactionsArray);
      } else {
        reject('post does not have reactions');
      }
    }, 3000);
  });
}

function wait(milliseconds) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, milliseconds);
  });
}
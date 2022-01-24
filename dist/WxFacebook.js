"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = WxFacebook;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function WxFacebook(props) {
  return /*#__PURE__*/_react.default.createElement("svg", {
    fill: "currentColor",
    viewBox: "0 0 448 512",
    height: props.size ? props.size : 20,
    width: props.size ? props.size : 20
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
  }));
}
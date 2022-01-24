"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function WxMenu(props) {
  return /*#__PURE__*/_react.default.createElement("svg", {
    stroke: "currentColor",
    fill: "none",
    "stroke-width": "2",
    viewBox: "0 0 24 24",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    height: props.size ? props.size : 20,
    width: props.size ? props.size : 20,
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("line", {
    x1: "3",
    y1: "12",
    x2: "21",
    y2: "12"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "3",
    y1: "6",
    x2: "21",
    y2: "6"
  }), /*#__PURE__*/_react.default.createElement("line", {
    x1: "3",
    y1: "18",
    x2: "21",
    y2: "18"
  }));
}

var _default = WxMenu;
exports.default = _default;
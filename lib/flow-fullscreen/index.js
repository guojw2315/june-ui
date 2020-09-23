"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = FlowFullScreen;

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

var _react = _interopRequireWildcard(require("react"));

var _icons = require("@ant-design/icons");

function FlowFullScreen(props) {
  var _this = this;

  var el = props.el;

  var _useState = (0, _react.useState)(false),
      isFullScreen = _useState[0],
      setIsFullScreen = _useState[1];

  (0, _react.useEffect)(function () {
    document.addEventListener('fullscreenchange', _listenScreenChange.bind(_this));
    return function () {
      document.removeEventListener('fullscreenchange', _listenScreenChange.bind(_this));
    };
  }, []);

  var _listenScreenChange = function _listenScreenChange() {
    console.log('change');
    setIsFullScreen(document.fullscreenElement !== null);
  };

  var _onFullScreen = function _onFullScreen() {
    el.current.requestFullscreen();
  };

  var _onExitFullScreen = function _onExitFullScreen() {
    document.exitFullscreen();
  };

  return isFullScreen ? /*#__PURE__*/_react["default"].createElement(_button["default"], {
    icon: /*#__PURE__*/_react["default"].createElement(_icons.FullscreenExitOutlined, null),
    onClick: _onExitFullScreen
  }, "\u9000\u51FA") : /*#__PURE__*/_react["default"].createElement(_button["default"], {
    icon: /*#__PURE__*/_react["default"].createElement(_icons.FullscreenOutlined, null),
    onClick: _onFullScreen
  }, "\u5168\u5C4F");
}
//# sourceMappingURL=index.js.map
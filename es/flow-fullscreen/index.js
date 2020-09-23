import "antd/es/button/style/css";
import _Button from "antd/es/button";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { FullscreenOutlined, FullscreenExitOutlined } from "@ant-design/icons";
export default function FlowFullScreen(props) {
  var _this = this;

  var el = props.el;

  var _useState = useState(false),
      isFullScreen = _useState[0],
      setIsFullScreen = _useState[1];

  useEffect(function () {
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

  return isFullScreen ? /*#__PURE__*/React.createElement(_Button, {
    icon: /*#__PURE__*/React.createElement(FullscreenExitOutlined, null),
    onClick: _onExitFullScreen
  }, "\u9000\u51FA") : /*#__PURE__*/React.createElement(_Button, {
    icon: /*#__PURE__*/React.createElement(FullscreenOutlined, null),
    onClick: _onFullScreen
  }, "\u5168\u5C4F");
}
//# sourceMappingURL=index.js.map
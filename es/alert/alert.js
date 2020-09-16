import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React, { useEffect } from 'react';

function Alert(props) {
  var children = props.children,
      _props$kink = props.kink,
      kink = _props$kink === void 0 ? 'info' : _props$kink,
      rest = _objectWithoutPropertiesLoose(props, ["children", "kink"]);

  useEffect(function () {
    console.log('%cjune-ui Alert mounted!', 'font-size: 18px;');
    return function () {};
  }, []);
  return /*#__PURE__*/React.createElement("div", rest, props.children);
}

export default Alert;
//# sourceMappingURL=alert.js.map
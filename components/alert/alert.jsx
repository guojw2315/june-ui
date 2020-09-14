import React from 'react';

function Alert ({children, kink = 'info', ...rest}) {
  return <div {...rest}>
    {props.children}
  </div>
}

export default Alert
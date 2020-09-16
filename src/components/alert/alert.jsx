import React, { useEffect } from 'react';

function Alert(props) {

  const { children, kink = 'info', ...rest } = props;
  useEffect(() => {
    console.log('%cjune-ui Alert mounted!', 'font-size: 18px;')
    return () => {
      
    }
  }, [])

  return <div {...rest}>
    {props.children}
  </div>
}

export default Alert
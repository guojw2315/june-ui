import React, { useEffect, useState, useRef, useCallback } from "react";
import { Button } from "antd";

import { FullscreenOutlined, FullscreenExitOutlined } from "@ant-design/icons";

export default function FlowFullScreen(props) {
  const { el } = props;

  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    document.addEventListener('fullscreenchange', _listenScreenChange.bind(this))
    return () => {
      document.removeEventListener('fullscreenchange', _listenScreenChange.bind(this))
    };
  }, []);

  const _listenScreenChange = () =>{
    console.log('change')
    setIsFullScreen(document.fullscreenElement !== null);
  }

  const _onFullScreen = () => {
    el.current.requestFullscreen();
  };

  const _onExitFullScreen = () => {
    document.exitFullscreen();
  };

  return isFullScreen ? (
    <Button icon={<FullscreenExitOutlined />} onClick={_onExitFullScreen}>
      退出
    </Button>
  ) : (
    <Button icon={<FullscreenOutlined />} onClick={_onFullScreen}>
      全屏
    </Button>
  );
}

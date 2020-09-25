# 公用组件库

### 安装
> npm
```shell
$ npm i june-ui -S --registry=http://47.108.137.67:4873/
```
> yarn
```shell 
$ yarn add june-ui --registry=http://47.108.137.67:4873/
```
### 更新
> npm
```shell
$ npm update june-ui@latest --registry=http://47.108.137.67:4873/
```
> yarn
```shell
$ yarn upgrade june-ui@latest --registry=http://47.108.137.67:4873/
```
  
### 更多用法
推荐使用 [nrm](https://www.npmjs.com/package/nrm) 管理仓库源
```shell
# 全局安装 nrm 
$ npm install -g nrm
# or use yarn 
$ yarn global add nrm

# 添加私服地址
$ nrm add shj http://47.108.137.67:4873/     

# 使用私服
$ nrm use shj
```

### 组件列表
* FlowList  <流程列表>
* FlowDetail  <流程详情>
* FlowRecord  <审批日志>
* FlowViewer  <流程图>
* FlowActionButtons  <转办、同意、驳回组合按钮>
* FlowTransferModal  <转办弹出框>
* FlowFullScreen  <全屏按钮>


### 示例

> FlowList


![Image text](http://file.thinkio.top/img/flow_list.png)



```javascript react
import React from 'react';
import { config } from 'ice';
import { appHistory } from '@ice/stark';
import { FlowList } from 'june-ui';
import { get, post } from '@/api/request';

export default function FlowListPage(props) {

  /**
  * 传入的请求方法
  *
  */
  const request = (req) => {
    switch (req.method) {
      case 'GET':
        return get(req.url, req.data, true);
      case 'POST':
        return post(req.url, { data: req.data }, true);
      default:
        break;
    }
  };

  /**
  * 列表 查看按钮点击事件 
  * record 点击行数据
  */
  const onLinkClick = (_, record, index) => {
    // 路由跳转
  };

  return <FlowList request={request} onLinkClick={onLinkClick} />;
}
```

> FlowList props

     
|  参数   | 说明  | 类型  | 默认值 | 
|  ----  | ----  | ----  | ----  |
| request  | 请求方法 | function | / |
| onLinkClick  | 列表查看点击 | function | / |


> FlowDetail     


![Image text](http://file.thinkio.top/img/flow_detail.png)


```javascript react
import React, { useEffect, useState } from 'react';
import { FlowDetail } from 'june-ui';
import { useParams } from 'ice';
import { get, post } from '@/api/request';

export default FlowDetailPage function () {

  const [id, setId] = useState()
  const params = useParams()

  const request = (config) => {
    switch (config.method) {
      case 'GET':
        return get(config.url, config.data, true);
      case 'POST':
        return post(config.url, { data: config.data }, true);
      default:
        break;
    }
  };

  useEffect(() => {
    setId(params.id)
    return () => {};
  }, []);

  return <FlowDetail id={id} request={request} />;
};
```

> FlowDetail props


|  参数   | 说明  | 类型  | 默认值 | 
|  ----  | ----  | ----  | ----  |
| id  | 流程实例ID | string | / |
| request  | 请求方法 | function | / |
| renderInfo | 基本信息渲染方法 | function | / |
| renderApprove | 审批表单渲染方法 | function | / |
| onTransfer | 转办回调 | function | / |
| onAgree | 同意回调 | function | / |
| onReject | 驳回回调 | function | / |
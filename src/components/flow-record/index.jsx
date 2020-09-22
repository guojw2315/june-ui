import React, { useEffect } from "react";

export default function FlowRecord({ data } = props) {
  useEffect(() => {
    if (data) {
      console.log("flow record", data);
    }
    return () => {};
  }, [data]);

  return (
    <div className="flow-record">
      {data?.historyTasks?.map((d, i) => (
        <div key={i} className="flow-record-item">
          <div className="flow-record-item-label">
            {d.createdTime?.split(" ")?.map((timeStr, j) => {
              return (
                <div className="flow-record-item-text" key={j}>
                  {timeStr}
                </div>
              );
            })}
          </div>
          <div className="flow-record-item-mark">
            <div className="flow-mark-circle"></div>
          </div>
          <div className="flow-record-item-content">
            <div className="flow-item-content-title">{d.nodeName}</div>
            <div className="flow-item-content-row">
              <div className="flow-item-row-label">意见：</div>
              <div className="flow-item-row-val">{d.stateDesc}</div>
            </div>
            <div className="flow-item-content-row">
              <div className="flow-item-row-label">备注：</div>
              <div className="flow-item-row-val">{d.remark}</div>
            </div>
            <div className="flow-item-content-row">
              <div className="flow-item-row-label">附件：</div>
              <div className="flow-item-row-attachments">
                {d.attachments &&
                  d.attachments.map((attachment, j) => {
                    switch (attachment.fileType) {
                      case "IMAGE":
                        return (
                          <div key={j} className="flow-attachments-image">
                            <img
                              src={attachment.fileUrl}
                              // src={'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2456468987,3284231714&fm=26&gp=0.jpg'}
                              alt=""
                            />
                          </div>
                        );
                      default:
                        return (
                          <div key={j} className="flow-attachments-link">
                            <a href={attachment.fileUrl} target="_blank">
                              {attachment.fileName}
                            </a>
                          </div>
                        );
                    }
                  })}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

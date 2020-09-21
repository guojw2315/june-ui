import React, { useEffect } from "react";

export default function FlowRecord({ data } = props) {
  useEffect(() => {
    if (data) {
    }
    return () => {};
  }, [data]);

  return (
    <div className="flow-record">
    </div>
  );
}
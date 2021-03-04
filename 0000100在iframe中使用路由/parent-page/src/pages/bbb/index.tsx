import React, { FC, useRef } from "react";

const SRC = "http://localhost:3001";

const Bbb: FC = () => {
  const ref_iframe = useRef<any>();

  const handleConsoleContentWindow = () => {
    console.log(ref_iframe?.current?.contentWindow);
  };

  const handlePostMessage = () => {
    ref_iframe?.current?.contentWindow?.postMessage(
      { type: "consoleEvent" },
      "http://localhost:3001"
    );
  };

  return (
    <div>
      <div>this is bbb</div>
      <div>
        <button onClick={handleConsoleContentWindow}>
          console contentWindow（跨域无法获取）
        </button>
        <div>
          <button onClick={handlePostMessage}>
            post message:console event
          </button>
        </div>
      </div>
      <div>
        <iframe
          title="iframe"
          src={SRC}
          style={{ width: "600px", height: "200px", margin: "10px" }}
          ref={ref_iframe}
        ></iframe>
      </div>
    </div>
  );
};

export default Bbb;

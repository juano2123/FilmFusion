import React, { useState } from "react";
import "./barAr.css";
// import { Switch,ConfigProvider,Space } from 'antd';

const BarAr = () => {
  const [state, setstate] = useState("fill");

  return (
    <div className="Switch">
      <div className="botones">
        {state === "fill" ? (
          <>
            <button class="btn" className="AR">
              ar
            </button>

            <button class="btn">objet</button>
          </>
        ) : (
          <>
            <button class="btn">ar</button>

            <button className="objet" class="btn">
              objet
            </button>
          </>
        )}
        {/* <button className={state === "fill" ? "opcione1" : "opcione2"}>
          sadsa
        </button> */}
      </div>
      {/* <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary:'rgba(57, 57, 57, 0.7)',
          colorTextQuaternary:'rgba(57, 57, 57, 0.7)',colorTextLightSolid:'rgba(10, 132, 255, 1)',fontSize:'3',fontSizeSM:'12',fontFamily:'SF UI Display'
        },
      }}
    >
      <Space>
        <Switch checkedChildren="AR" unCheckedChildren="Objeto" defaultChecked />
      </Space>
    </ConfigProvider> */}
    </div>
  );
};
export default BarAr;

import React from 'react'
import "./barAr.css";
import { Switch,ConfigProvider,Space } from 'antd';


const BarAr = () => {


  

    
  return (
    <div className='Switch' >
      
       <ConfigProvider
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
  </ConfigProvider>

    </div>
  )
}
export default BarAr;
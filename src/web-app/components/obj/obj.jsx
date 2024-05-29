import React from "react";
import Spline from '@splinetool/react-spline';

const ObjCaliwood  = ({ url }) => {
  return (
    <div className="obj" style={{
      position: 'fixed', 
      top: '50%', 
      left: '50%', 
      transform: 'translate(-50%, -50%)', 
      width: '404vw', 
      height: '50vh'
    }}>
      <Spline scene={url} />
    </div>
  );
};

export default ObjCaliwood;


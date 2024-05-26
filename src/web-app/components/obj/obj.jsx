import React from "react";
import Spline from '@splinetool/react-spline';

const ObjCaliwood  = ({ url }) => {
  return (
    <div className="obj" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh' }}>
      <Spline scene={url} />
    </div>
  );
};

export default ObjCaliwood ;

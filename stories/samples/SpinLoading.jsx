import React from 'react';
import 'jb-loading';
function SpinLoading() {
  return (
    <div className="spin-loading-page">
      <div style={{ width: '24px', height: '24px' }}>
        <jb-loading></jb-loading>
      </div>
      <div style={{ width: '40px', height: '40px' }}>
        <jb-loading></jb-loading>
      </div>
      <div style={{ width: '64px', height: '64px' }}>
        <jb-loading></jb-loading>
      </div>
      <div style={{ width: '128px', height: '128px' }}>
        <jb-loading></jb-loading>
      </div>
      <div style={{ width: '256px', height: '256px','--jb-loading-color':'#f00' }}>
        <jb-loading></jb-loading>
      </div>
      <div style={{ width: '400px', height: '400px' }}>
        <jb-loading></jb-loading>
      </div>
    </div>
  );
}
export default SpinLoading;


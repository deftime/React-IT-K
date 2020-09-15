import React from 'react';
import appLoader from '../../images/appLoader.svg';

function loader() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', itemAlign: 'center', height: '100vh'}}>
      <img src={appLoader} alt="global-loader"/>
    </div>
  )
}

export default loader;

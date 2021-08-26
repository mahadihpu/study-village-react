import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Sidebar from '../Shared/Sidebar/Sidebar';
import HHW__Content from './HHW__Content';

const HHW__Outline = () => {
   return (
      <>
         <Navbar />
         <div className="main-root">
            <Sidebar />
            <HHW__Content />
         </div>
      </>
   );
};

export default HHW__Outline;
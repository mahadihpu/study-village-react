import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Sidebar from '../Shared/Sidebar/Sidebar';
import Program__Content from './Program__Content';

const Program__Calendar = () => {
   return (
      <>
         <Navbar />
         <div className="main-root">
            <Sidebar />
            <Program__Content />
         </div>
      </>
   );
};

export default Program__Calendar;
import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Sidebar from '../Shared/Sidebar/Sidebar';
import Contact__Content from './Contact__Content';

const Contact = () => {
   return (
      <>
         <Navbar />
         <div className="main-root">
            <Sidebar />
            <Contact__Content />
         </div>
      </>
   );
};

export default Contact;
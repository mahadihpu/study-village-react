import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Sidebar from '../Shared/Sidebar/Sidebar';
import Mentor__Content from './Mentor__Content';


const Mentor__Profile = () => {
   return (
      <>
         <Navbar />
         <div className="main-root">
            <Sidebar />
            <Mentor__Content />
         </div>
      </>
   );
};

export default Mentor__Profile;
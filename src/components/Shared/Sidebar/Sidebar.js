import React from 'react';
import home from "../../../assets/img/home-gray.svg";
import laptop from "../../../assets/img/laptop-green.svg";
import file from "../../../assets/img/file-green.svg";
import user from "../../../assets/img/user-green.svg";
import call from "../../../assets/img/call-green.svg";

const Sidebar = () => {
   return (
      <div className="sidebar-menu">
         <div className="main-menu">
            <nav>
               <ul>
                  <li><a className="active" href="index.html"><img src={home} alt="" /></a></li>
                  <li><a href="page-2.html"><img src={laptop} alt="" /></a></li>
                  <li><a href="page-3.html"><img src={file} alt="" /></a></li>
                  <li><a href="page-4.1.html"><img src={user} alt="" /></a></li>
                  <li><a href="page-5.html"><img src={call} alt="" /></a></li>
               </ul>
            </nav>
         </div>

         <div className="hover-menu-wrapper">
            <ul>
               <li><a className="active" href="index.html">Home</a></li>
               <li><a href="page-2.html">Program & Calendar</a></li>
               <li><a href="page-3.html">HHW Outline</a></li>
               <li><a href="page-4.1.html">Mentor Profile</a></li>
               <li><a href="page-5.html">Contact</a></li>
            </ul>
         </div>

      </div>
   );
};

export default Sidebar;
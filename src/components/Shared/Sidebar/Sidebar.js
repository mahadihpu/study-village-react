import React from 'react';
import home from "../../../assets/img/home-gray.svg";
import laptop from "../../../assets/img/laptop-green.svg";
import file from "../../../assets/img/file-green.svg";
import user from "../../../assets/img/user-green.svg";
import call from "../../../assets/img/call-green.svg";
import { Link } from 'react-router-dom';

const Sidebar = () => {
   return (
      <div className="sidebar-menu">
         <div className="main-menu">
            <nav>
               <ul>
                  <li><Link to="/"><img src={home} alt="" /></Link></li>
                  <li><Link to="/program-calendar"><img src={laptop} alt="" /></Link></li>
                  <li><Link to="/hhw-outline"><img src={file} alt="" /></Link></li>
                  <li><Link to="/mentor-profile"><img src={user} alt="" /></Link></li>
                  <li><Link to="/contact"><img src={call} alt="" /></Link></li>
               </ul>
            </nav>
         </div>

         <div className="hover-menu-wrapper">
            <ul>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/program-calendar">Program & Calendar</Link></li>
               <li><Link to="/hhw-outline">HHW Outline</Link></li>
               <li><Link to="/mentor-profile">Mentor Profile</Link></li>
               <li><Link to="/contact">Contact</Link></li>
            </ul>
         </div>

      </div>
   );
};

export default Sidebar;
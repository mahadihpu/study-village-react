import React from 'react';
import "../../../assets/css/style.css";
import "../../../assets/css/responsive.css";
import logo from "../../../assets/img/SVLogo.svg";
import user from "../../../assets/img/user.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons';

const Navbar = () => {
   return (
      <header className="header-area">
         <div className="header-wrapper d-flex align-items-center justify-content-between">
            {/* <!-- logo-area --> */}
            <div className="logo-area">
               <a href="index.html">
                  <img src={logo} alt="logo" />
               </a>
            </div>
            {/* <!-- logo-area --> */}

            {/* <!-- header-right --> */}
            <div className="header-right-area d-flex align-items-center">
               {/* <!-- search-area --> */}
               <div className="search-area position-relative">
                  <input type="text" placeholder="Search" />
                  <span><FontAwesomeIcon icon={faSearch} /></span>
               </div>
               {/* <!-- search-area --> */}

               {/* <!-- mobo-bar --> */}
               <div className="mobo-bar d-md-none">
                  <div className="bar">
                     <span className="border-bar"></span>
                     <span className="border-bar hide-bar"></span>
                     <span className="border-bar"></span>
                  </div>
               </div>
               {/* <!-- mobo-bar_End -->

              <!-- notification --> */}
               <div className="notifiation-area">
                  <div className="notification-icon">
                     <FontAwesomeIcon className="fas" icon={faBell} />
                     <span>2</span>
                  </div>
               </div>
               {/* <!-- notification -->

              <!-- user-btn --> */}
               <div className="user-btn-area dropdown">
                  <div className="user-btn-wrapper d-flex align-items-center dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                     <div className="user-img">
                        <img src={user} alt="" />
                     </div>
                     <div className="user-btn-text">
                        Angelica Santos' Parents <span><i className="fas fa-angle-down"></i></span>
                     </div>
                  </div>

                  <div className="user-menu dropdown-menu" aria-labelledby="dropdownMenuButton1">
                     <ul>
                        <li><a href="page-4.3.html">View Your Profile</a></li>
                        <li><a href="page-4.2.html">View Angelica Profile</a></li>
                     </ul>
                  </div>

               </div>
               {/* <!-- user-btn --> */}
            </div>
            {/* <!-- header-right --> */}
         </div>
      </header>
   );
};

export default Navbar;
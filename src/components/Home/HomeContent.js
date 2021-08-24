import React from 'react';
import profile1 from "../../assets/img/profile-1.jpg"
import profile2 from "../../assets/img/profile-2.jpg";
import wheel from "../../assets/img/Wheel.png";

const HomeContent = () => {
   return (
      // <!-- main-content -->
      <div className="main-content">
         <div className="content-wrapper">

            {/* <!-- user-profile --> */}
            <div className="user-profile">
               {/* <!-- single-profile --> */}
               <div className="single-profile d-flex align-items-center white-box">
                  <div className="user-profile-img">
                     <img src={profile2} alt="" />
                  </div>
                  <div className="user-profile-content">
                     <h4>Angelica Santos</h4>
                     <span>Your Child</span>
                     <p><strong>Master of Communication</strong> <br /></p>
                     <p>Deakin University in Melbourne, Australia</p>
                     <a href="page-4.2.html" className="btn profile-btn">View Profile</a>
                  </div>
               </div>
               {/* <!-- single-profile -->
                  <!-- single-profile --> */}
               <div className="single-profile d-flex align-items-center white-box">
                  <div className="user-profile-img">
                     <img src={profile1} alt="" />
                  </div>
                  <div className="user-profile-content">
                     <h4>Lana Wilson</h4>
                     <span>Angelica’s Student Supporter in Melbourne, Australia</span>
                     <p><strong>Servicing Students From:</strong> <br /></p>
                     <p>Deakin University, RMIT, University of Melbourne,
                        Swinburne University, Monash University, La Trobe University.</p>
                     <a href="page-4.1.html" className="btn profile-btn">View Profile</a>
                  </div>
               </div>
               {/* <!-- single-profile --> */}
            </div>
            {/* <!-- user-profile_End -->

              <!-- progrum-desc-wrapper --> */}
            <div className="progrum-desc-wrapper">
               <div className="white-box">
                  <h4>Angelica’s Happy, Healthy and Wise Program</h4>
                  <div className="row align-items-center pt-lg-5">
                     <div className="col-lg-6 order-2 order-lg-1">
                        <div className="program-img text-center">
                           <img src={wheel} alt="" />
                        </div>
                     </div>
                     <div className="col-lg-6 order-1 order-lg-2">
                        <div className="program-descrip-wrap">
                           <h5>Program Description</h5>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                           <div className="program-modiule pt-3 pt-lg-5">
                              <h5>Modules</h5>
                              <span>(Current Module is highlighted)</span>
                              <div className="modiule-btns">
                                 <div className="single-modiule-btn">
                                    <a href="" className="btn modulebtn">M1 SETTING IN</a>
                                 </div>
                                 <div className="single-modiule-btn">
                                    <a href="" className="btn modulebtn active">M2 CONSOLIDATING STUDIES</a>
                                 </div>
                                 <div className="single-modiule-btn">
                                    <a href="" className="btn modulebtn">M3 GOAL SETTING</a>
                                 </div>
                                 <div className="single-modiule-btn">
                                    <a href="" className="btn modulebtn">M4 GOAL TRACKING</a>
                                 </div>
                                 <div className="single-modiule-btn">
                                    <a href="" className="btn modulebtn">M5 TRANSITUON</a>
                                 </div>
                              </div>
                           </div>

                           <div className="quick-link pt-3 pt-lg-4">
                              <h5>Quick Links</h5>
                              <a href="page-2.html">Discover Angelica's Program In Depth </a>
                           </div>

                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* <!-- progrum-desc-wrapper -->

              <!-- events-area --> */}
            <div className="events-area">
               <div className="event-box-wrapper white-box">
                  <div className="row">
                     <div className="col-lg-8">
                        <div className="event-content-wrapp">
                           <h4>Your Next Event</h4>
                           <div className="events-items">
                              {/* <!-- single-event-item --> */}
                              <div className="single-event-item text-center single-event-1">
                                 <div className="event-icons">
                                    <img src="../../assets/img/parents.svg" alt="" />
                                 </div>
                                 <div className="event-text">
                                    <h5>M2 Parents Meeting</h5>
                                    <p>Friday 3rd November</p>
                                 </div>
                              </div>
                              {/* <!-- single-event-item_End -->
                                      <!-- single-event-item --> */}
                              <div className="single-event-item text-center single-event-2">
                                 <div className="event-icons">
                                    <img src="../../assets/img/parents.svg" alt="" />
                                 </div>
                                 <div className="event-text">
                                    <h5>M3 Parents Meeting</h5>
                                    <p>Friday 3rd November</p>
                                 </div>
                              </div>
                              {/* <!-- single-event-item_End -->
                                      <!-- single-event-item --> */}
                              <div className="single-event-item text-center single-event-3">
                                 <div className="event-icons">
                                    <img src="../../assets/img/parents.svg" alt="" />
                                 </div>
                                 <div className="event-text">
                                    <h5>M24 Parents Meeting</h5>
                                    <p>Friday 3rd November</p>
                                 </div>
                              </div>
                              {/* <!-- single-event-item_End -->
                                      <!-- single-event-item --> */}
                              <div className="single-event-item text-center single-event-4">
                                 <div className="event-icons">
                                    <img src="../../assets/img/parents.svg" alt="" />
                                 </div>
                                 <div className="event-text">
                                    <h5>M5 Parents Meeting</h5>
                                    <p>Friday 3rd November</p>
                                 </div>
                              </div>
                              {/* <!-- single-event-item_End --> */}
                           </div>

                        </div>
                     </div>
                     <div className="col-lg-4">
                        <div className="paraents-meeting-content">
                           <h5>Parent's Meeting</h5>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur magni excepturi sint totam nulla veritatis nesciunt suscipit eveniet iusto porro nihil esse dolorem perferendis, repudiandae blanditiis vel delectus molestias saepe?</p>
                           <div className="quick-link">
                              <h5>Quick Links</h5>
                              <a href="page-2.html">View All Angelica’s Events</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* <!-- events-area_End -->

              <!-- card-area --> */}
            <div className="card-block-area">
               {/* <!-- single-card --> */}
               <div className="single-card-block white-box text-center">
                  <div className="card-icon">
                     <img src="../../assets/img/question.svg" alt="" />
                  </div>
                  <div className="card-text">
                     <h4>Need Help?</h4>
                     <p>ou can contact your Agent or StudyVillage directly. Click below for all contact
                        details.</p>
                  </div>
                  <a href="page-5.html" className="btn contact-btn">Contact us</a>
               </div>
               {/* <!-- single-card -->
                  <!-- single-card --> */}
               <div className="single-card-block white-box text-center">
                  <div className="card-icon">
                     <img src="../../assets/img/social-group.svg" alt="" />
                  </div>
                  <div className="card-text">
                     <h4>Follow Us</h4>
                     <p>Follow StudyVillage Social Media to know
                        more about how we help students in their
                        studies and personal growth journey..</p>
                  </div>
               </div>
               {/* <!-- single-card -->
                  <!-- single-card --> */}
               <div className="single-card-block white-box text-center">
                  <div className="card-icon">
                     <img src="../../assets/img/book-2.jpg" alt="" />
                  </div>
                  <div className="card-text">
                     <h4>Resolve</h4>
                     <p>Our journal talks in depth about the
                        challenges of studying overseas, in an
                        accessible, practical and light-hearted way.</p>
                  </div>
                  <a href="" className="btn contact-btn">Read</a>
               </div>
               {/* <!-- single-card -->
                  <!-- single-card --> */}
               <div className="single-card-block white-box text-center">
                  <div className="card-icon">
                     <img src="../../assets/img/line-o.svg" alt="" />
                  </div>
                  <div className="card-text">
                     <h4>Feedback?</h4>
                     <p>Do you have any feedback on StudyVillage
                        services? Let us know so we can continue
                        to improve. </p>
                  </div>
                  <a href="page-5.html" className="btn contact-btn">Feedback</a>
               </div>
               {/* <!-- single-card --> */}
            </div>
            {/* <!-- card-area_End --> */}

         </div>
      </div>
   );
};

export default HomeContent;
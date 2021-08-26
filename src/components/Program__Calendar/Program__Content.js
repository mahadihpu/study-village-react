import React from 'react';
import wheel from '../../assets/img/Wheel.png';
import file__white from '../../assets/img/file-white.svg';
import two__men from '../../assets/img/two-men.svg';
import parents from '../../assets/img/parents-small.svg';
import phone from '../../assets/img/phone.svg';
import My__Calendar from '../Calendar/My__Calendar';

const Program__Content = () => {
   return (
      // <!-- main-content -->
      <div className="main-content">
         <div className="content-wrapper">

            {/* <!-- progrum-desc-wrapper --> */}
            <div className="progrum-desc-wrapper">
               <div className="white-box">
                  <h4>Angelica’s Current Happy, Healthy and Wise Module</h4>
                  <div className="row align-items-center pt-lg-5">
                     <div className="col-lg-6 order-2 order-lg-1">
                        <div className="program-img text-center">
                           <img src={wheel} alt="" />
                        </div>
                     </div>
                     <div className="col-lg-6 order-1 order-lg-2">
                        <div className="program-descrip-wrap">
                           <h4>Consolidating Studies</h4>
                           <p>Now they’ve Settled In, this module will support students in developing effective study habits
                              and a healthy lifestyle to ensure success. </p>

                           <ul className="module-list">
                              <li>The Consolidating Studies module is about:</li>
                              <li><span>1.</span> Getting established;</li>
                              <li><span>2.</span> Coping with change;</li>
                              <li><span>3.</span> Focussing on academic performance;</li>
                              <li><span>4.</span> Finding happiness and wellbeing;</li>
                              <li><span>5.</span> Canvassing support and safety issues around part-time work.</li>
                           </ul>

                           <div className="program-modiule pt-3 pt-lg-4">
                              <h5>Modules</h5>
                              <div className="modiule-btns page-2">
                                 <div className="single-modiule-btn d-flex align-items-center">
                                    <a href="" className="btn modulebtn">M1 SETTING IN</a>
                                    <p>PREVIOUS MODULE</p>
                                 </div>
                                 <div className="single-modiule-btn d-flex align-items-center">
                                    <a href="" className="btn modulebtn">M2 COSNSOLDING STUDIES</a>
                                    <p>CURRENT MODULE</p>
                                 </div>
                                 <div className="single-modiule-btn d-flex align-items-center">
                                    <a href="" className="btn modulebtn">M3 GOAL SETTING</a>
                                    <p>NEXT MODULE</p>
                                 </div>
                              </div>
                           </div>

                           <ul className="tips-list pt-3 pt-lg-4">
                              <h5>Consolidating Studies Outline’s Topics</h5>
                              <li> Safety;</li>
                              <li> Study Habits;</li>
                              <li> Study Habits; </li>
                              <li> People & Friendship;</li>
                              <li> English Language;</li>
                              <li> English Language;</li>
                              <li> Part-Time Work;</li>
                              <li> Happiness and Wellbeing.</li>
                           </ul>

                           <div className="quick-link pt-3 pt-lg-4">
                              <h5>Quick Links</h5>
                              <a href="page-3.html">View Outlines </a>
                           </div>

                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* <!-- progrum-desc-wrapper --> */}


            <div className="activitis-area">
               <div className="single-activities white-box">
                  <div className="single-activitis-head">
                     <h4>Program Activities for Consolidating Studies</h4>
                     <p>Click on the boxes below to discover what activities your child willl be doing for his/her
                        StudyVillage Program. </p>
                  </div>

                  <div className="activities-items d-grid">
                     {/* <!-- single-event-item --> */}
                     <div className="single-event-item text-center single-event-1">
                        <div className="event-icons">
                           <img src={file__white} alt="" />
                        </div>
                        <div className="event-text">
                           <h5>M2 Self-Survey</h5>
                           <p>Before October 15th</p>
                        </div>
                     </div>
                     {/* <!-- single-event-item_End -->
                          <!-- single-event-item --> */}
                     <div className="single-event-item text-center single-event-1">
                        <div className="event-icons">
                           <img src={two__men} alt="" />
                        </div>
                        <div className="event-text">
                           <h5>M2 One-On-One Meetup</h5>
                           <p>Wednesday 20th October</p>
                        </div>
                     </div>
                     {/* <!-- single-event-item_End -->
                          <!-- single-event-item --> */}
                     <div className="single-event-item text-center single-event-1">
                        <div className="event-icons">
                           <img src={parents} alt="" />
                        </div>
                        <div className="event-text">
                           <h5>M2 Parents Meeting</h5>
                           <p>Friday 31st October</p>
                        </div>
                     </div>
                     {/* <!-- single-event-item_End -->
                          <!-- single-event-item --> */}
                     <div className="single-event-item text-center single-event-1">
                        <div className="event-icons">
                           <img src="" alt="" />
                        </div>
                        <div className="event-text">
                           <h5>M2 Follow Up Call</h5>
                           <p>Friday 15th November</p>
                        </div>
                     </div>
                     {/* <!-- single-event-item_End -->
                          <!-- single-event-item --> */}
                     <div className="single-event-item text-center single-event-1">
                        <div className="event-icons">
                           <img src={phone} alt="" />
                        </div>
                        <div className="event-text">
                           <h5>M2 Follow Up Call</h5>
                           <p>Friday 15th November</p>
                        </div>
                     </div>
                     {/* <!-- single-event-item_End --> */}
                  </div>

                  <div className="activits-text pt-3 pt-lg-4">
                     <h5>Self-Survey</h5>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.</p>
                  </div>

               </div>

               <div className="single-activities white-box">
                  <div className="calender-title">
                     <h4>Your Calendar</h4>

                     <div className="calender-wrapper mt-3 mt-lg-4">
                        <div className="calender-wrapp">
                           <My__Calendar />
                        </div>
                     </div>

                     <div className="calender-bottom mt-3 mt-lg-4">
                        <p>Your next meeting will be on the 22nd of October. Need to reschedule? Contact your
                           Agent or the Student Supporter by clicking the button below.</p>
                        <a href="page-5.html" className="btn">Contact Us</a>
                     </div>

                  </div>
               </div>

            </div>



         </div>
      </div>
   );
};

export default Program__Content;
import React from 'react';
import user from '../../assets/img/user-3.jpg';
import infined from '../../assets/img/Infined.png';
const Contact__Content = () => {
   return (
      <div className="main-content">
         <div className="content-wrapper">
            {/* <!-- contact-box --> */}
            <div className="contact-box-wrapper">
               <div className="row">
                  <div className="col-lg-5 col-md-6">
                     <div className="contact-box white-box d-flex">
                        <div className="contact-img">
                           <img src={user} alt="" />
                        </div>
                        <div className="contact-text">
                           <div className="contact-heade">
                              <h4>Contact Your Agent</h4>
                              <p>Your Agent in Manila, Philippines</p>
                           </div>
                           <div className="contact-list">
                              <ul>
                                 <li>Mobile and WhatsApp: <a href="tel:490459123456">+490459123456</a></li>
                                 <li>Email: <a href="mailto:simonperez@studyabroad.com.ph">simonperez@studyabroad.com.ph</a></li>
                                 <li>Messenger: <a href="">Simon Perez</a></li>
                                 <li>Skype: Simon Perez STA</li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-5 col-md-6 pt-4 pt-md-0">
                     <div className="contact-box white-box d-flex theme-box">
                        <div className="contact-img">
                           <img src={infined} alt="" />
                        </div>
                        <div className="contact-text">
                           <div className="contact-heade">
                              <h4>Contact StudyVillage</h4>
                              <p>Your StudyVillage Area Manager</p>
                           </div>
                           <div className="contact-list">
                              <ul>
                                 <li>Mobile and WhatsApp: <a href="tel:300329123456">+30 0329123456</a></li>
                                 <li>Email: <a href="mailto:simonperez@studyabroad.com.ph">simonperez@studyabroad.com.ph</a></li>
                                 <li>Messenger: <a href="">Simon Winch</a></li>
                                 <li>Skype:  Sam Winch SV</li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* <!-- contact-box_End -->
               <!-- feedback --> */}
            <div className="feedback-area">
               <div className="row">
                  <div className="col-lg-6">
                     <div className="feedback-content-wrapper white-box">
                        <h4>Have a Feedback?</h4>
                        <span>Complete the form below</span>
                        <form action="">
                           <div className="single-input-wrap">
                              <label for="">Name and Surname</label>
                              <div className="single-input">
                                 <input type="text" />
                              </div>
                           </div>
                           <div className="single-input-wrap">
                              <label for="">Preferred Contact</label>
                              <div className="single-input">
                                 <input type="text" />
                              </div>
                           </div>
                           <div className="single-input-wrap">
                              <label for="">What is Your Feedback About?</label>
                              <div className="single-input">
                                 <input type="text" />
                              </div>
                           </div>
                           <div className="single-input-wrap">
                              <label for="">Message</label>
                              <div className="single-input">
                                 <textarea name="" id="" cols="30" rows="10"></textarea>
                              </div>
                           </div>
                           <button className="btn" type="submit">Send</button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
            {/* <!-- feedback_Ewnd --> */}
         </div>
      </div>
   );
};

export default Contact__Content;
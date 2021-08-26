import React from 'react';
import banner from '../../assets/img/banner-bg.png';
import profile__1 from '../../assets/img/profile-1.jpg';
import phone from '../../assets/img/phone-green.svg';
import laptop from '../../assets/img/leptop.svg';
import messenger from '../../assets/img/messsenger.svg';
import skype from '../../assets/img/skype.svg';
import travel from '../../assets/img/trabvel.jpg';
import food from '../../assets/img/food.jpg';
import photography from '../../assets/img/photo.jpg';
import swiming from '../../assets/img/swiming.jpg';
import crafts from '../../assets/img/crafts.jpg';
import line__o from '../../assets/img/line-o.svg';

const Mentor__Content = () => {
   return (
      <div className="main-content">
         <div className="content-wrapper">
            <div className="row">
               <div className="col-lg-8">
                  <div className="user-content-page-wrapper">

                     {/* <!-- user-iamge-area --> */}
                     <div className="user-cover-image position-relative">
                        <img className="cover-phot" src={banner} alt="" />
                        <img className="profile-img abs-img" src={profile__1} alt="" />
                     </div>
                     {/* <!-- user-iamge-area --> */}

                     <div className="user-content-text-wrapper ex-pb-140">
                        <h4>Lana Wilson</h4>
                        <span>Angelica’s Student Supporter in Melbourne, Australia</span>

                        <div className="user-details-wrapper">
                           {/* <!-- user-single-details-wrapper --> */}
                           <div className="user-single-details">
                              <h5>Servicing Students From:</h5>
                              <p>Deakin University, RMIT, University of Melbourne, Swinburne University, Monash University, La Trobe University.</p>
                           </div>
                           {/* <!-- user-single-details-wrapper -->

                                    <!-- user-single-details-wrapper --> */}
                           <div className="user-single-details">
                              <h5>Servicing Students From:</h5>
                              <p>Deakin University, RMIT, University of Melbourne, Swinburne University, Monash University, La Trobe University.</p>
                           </div>
                           {/* <!-- user-single-details-wrapper --> */}
                           <hr />
                           {/* <!-- user-single-details-wrapper --> */}
                           <div className="user-single-details">
                              <h5>Lana’s approach with International Students</h5>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                 magna aliqua. Malesuada fames ac turpis egestas. Gravida cum sociis natoque penatibus et magnis dis. Lacus
                                 laoreet non curabitur gravida arcu ac tortor dignissim. Lorem ipsum dolor sit amet consectetur adipiscing elit.
                                 Fringilla est ullamcorper eget nulla facilisi. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Amet porttitor
                                 eget dolor morbi non arcu risus. Sit amet consectetur adipiscing elit pellentesque habitant. Aliquam sem et tortor
                                 consequat id porta nibh venenatis cras. Consequat nisl vel pretium lectus quam id. Quisque non tellus orci ac. Sapien
                                 eget mi proin sed libero enim sed faucibus turpis. Nisl condimentum id venenatis a condimentum vitae sapien
                                 pellentesque habitant. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum. Sed enim ut sem
                                 viverra aliquet eget sit. At volutpat diam ut venenatis tellus in metus vulputate eu. Ut etiam sit amet nisl. Ultrices
                                 neque ornare aenean euismod elementum nisi quis. Sed id semper risus in.</p>
                           </div>
                           {/* <!-- user-single-details-wrapper -->

                                    <!-- user-single-details-wrapper --> */}
                           <div className="user-single-details">
                              <h5>About myself</h5>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                 magna aliqua. Malesuada fames ac turpis egestas. Gravida cum sociis natoque penatibus et magnis dis. Lacus
                                 laoreet non curabitur gravida arcu ac tortor dignissim. Lorem ipsum dolor sit amet consectetur adipiscing elit.
                                 Fringilla est ullamcorper eget nulla facilisi. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Amet porttitor
                                 eget dolor morbi non arcu risus. Sit amet consectetur adipiscing elit pellentesque habitant. Aliquam sem et tortor
                                 consequat id porta nibh venenatis cras. Consequat nisl vel pretium lectus quam id. Quisque non tellus orci ac.</p>
                           </div>
                           {/* <!-- user-single-details-wrapper --> */}


                        </div>

                     </div>



                  </div>
               </div>

               <div className="col-lg-4">
                  <div className="user-page-sidebar">

                     <div className="single-sidebar contact-widget">
                        <h4>Lana’s Contact Details</h4>
                        <div className="contact-items">

                           <div className="single-contact-item d-flex align-items-center">
                              <div className="contact-icon">
                                 <img src={phone} alt="" />
                              </div>
                              <div className="contact-id">
                                 <span>Mobile and WhatsApp:</span>
                                 <a href="tel:610459123456">+61 0459123456</a>
                              </div>
                           </div>

                           <div className="single-contact-item d-flex align-items-center">
                              <div className="contact-icon">
                                 <img src={laptop} alt="" />
                              </div>
                              <div className="contact-id">
                                 <span>Email:</span>
                                 <a href="mailto:demo@gmail.com">demo@gmail.com</a>
                              </div>
                           </div>

                           <div className="single-contact-item d-flex align-items-center">
                              <div className="contact-icon">
                                 <img src={messenger} alt="" />
                              </div>
                              <div className="contact-id">
                                 <span>Messenger (preferred):</span>
                                 <a href="">Lana Wilson</a>
                              </div>
                           </div>

                           <div className="single-contact-item d-flex align-items-center">
                              <div className="contact-icon">
                                 <img src={skype} alt="" />
                              </div>
                              <div className="contact-id">
                                 <span>Skyper:</span>
                                 <a href="">lanawilmel81</a>
                              </div>
                           </div>

                        </div>
                     </div>

                     <div className="single-sidebar interest-widget">
                        <h4>Lana’s Interests</h4>
                        <div className="interest-items">

                           <div className="single-inderest-item d-flex align-items-center">
                              <div className="interest-img">
                                 <img src={travel} alt="" />
                              </div>
                              <div className="contact-id">
                                 <a href="">Travel</a>
                              </div>
                           </div>

                           <div className="single-inderest-item d-flex align-items-center">
                              <div className="interest-img">
                                 <img src={food} alt="" />
                              </div>
                              <div className="contact-id">
                                 <a href="">Food</a>
                              </div>
                           </div>

                           <div className="single-inderest-item d-flex align-items-center">
                              <div className="interest-img">
                                 <img src={photography} alt="" />
                              </div>
                              <div className="contact-id">
                                 <a href="">Photography</a>
                              </div>
                           </div>

                           <div className="single-inderest-item d-flex align-items-center">
                              <div className="interest-img">
                                 <img src={swiming} alt="" />
                              </div>
                              <div className="contact-id">
                                 <a href="">Sports</a>
                              </div>
                           </div>

                           <div className="single-inderest-item d-flex align-items-center">
                              <div className="interest-img">
                                 <img src={crafts} alt="" />
                              </div>
                              <div className="contact-id">
                                 <a href="">Crafts</a>
                              </div>
                           </div>


                        </div>
                     </div>

                     <div className="single-sidebar feedback-widget text-center">
                        <div className="feedback-widget-content">
                           <div className="feedback-wi-icon">
                              <img src={line__o} alt="" />
                           </div>
                           <div className="feedbac-widget-text">
                              <h4>Feedback?</h4>
                              <p>Do you have any feedback on StudyVillage
                                 services? Let us know so we can continue
                                 to improve.</p>
                              <a href="page-5.html" className="btn feed-btn">Feedback</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </div>
   );
};

export default Mentor__Content;
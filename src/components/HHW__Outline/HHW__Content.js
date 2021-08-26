import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import slider__2 from "../../assets/img/slider-2.png";
import slider__3 from "../../assets/img/slider-3.png";
import slider__4 from "../../assets/img/slider-4.png";
import slider__5 from "../../assets/img/slider-5.png";
import slider__6 from "../../assets/img/slider-6.png";

import '../../assets/css/style.css';
import '../../assets/css/responsive.css';
import './owl__style.css';
import need__1 from "../../assets/img/need-1.png";
const HHW__Content = () => {
   return (
      <div className="main-content">
         <div className="content-wrapper">
            <div className="outline-area">
               <div className="white-box">
                  <div className="outline-content-box">
                     <h4>Angelica’s Modules Outlines</h4>
                     <OwlCarousel className='outline-slide-active' center autoplay loop nav>
                        <div className="single-sldie-outline">
                           <div className="outline-img">
                              <img src={slider__2} alt="" />
                           </div>
                           <button className="btn">Download Outline</button>
                        </div>
                        <div className="single-sldie-outline">
                           <div className="outline-img">
                              <img src={slider__3} alt="" />
                           </div>
                           <button className="btn">Download Outline</button>
                        </div>
                        <div className="single-sldie-outline">
                           <div className="outline-img">
                              <img src={slider__5} alt="" />
                           </div>
                           <button className="btn">Download Outline</button>
                        </div>
                        <div className="single-sldie-outline">
                           <div className="outline-img">
                              <img src={slider__6} alt="" />
                           </div>
                           <button className="btn">Download Outline</button>
                        </div>
                        <div className="single-sldie-outline active">
                           <div className="outline-img position-relative">
                              <span className="checked-doc"><i className="fas fa-check-circle"></i></span>
                              <img src={slider__4} alt="" />
                           </div>
                           <button className="btn">Download Outline</button>
                        </div>

                     </OwlCarousel>

                     <div className="text-box">
                        <h5>What is an Outline? </h5>
                        <p>The Happy, Healthy and Wise Outline includes a graphic presentation of your child’s responses to the self-survey that he/she completed earlier in the semester/study period. Angelica’s responses are compared to the overall responses of other students at the same stage of their studies. Aneglica’s responses that differed most from the responses of other similar students are highlighted here. Angelica’s responses to key survey questions are tracked over time and presented here with a written report from
                           Angelica’s student supporter that combines survey results and discussion points from the face-to-face catch up.</p>
                     </div>

                  </div>
               </div>
            </div>

            <div className="more-info-text-wrapper">
               <div className="more-info-wrapper">
                  <div className="single-wrapper-info white-box">
                     <h4>Need more info?</h4>
                     <p>We have prepared an introduction to each module’s outline. This introduction describes briefly
                        what each module is about and what your child and his/her mentor will be canvassing together.
                        You candownload them by clicking the buttons below.</p>

                     <div className="info-items">
                        <div className="single-info-item" style={{ backgroundImage: `url(${need__1})` }}>
                           <h5>M2 CONSOLIDATING <br />
                              <i>STUDIES</i></h5>
                           <p>Front Page Introduction</p>
                        </div>
                        <div className="single-info-item" style={{ backgroundImage: `url(${need__1})` }}>
                           <h5>M3 <i>GOAL SETTING</i></h5>
                           <p>Front Page Introduction</p>
                        </div>
                        <div className="single-info-item" style={{ backgroundImage: `url(${need__1})` }}>
                           <h5>M4 <i>GOAL TRACKING</i></h5>
                           <p>Front Page Introduction</p>
                        </div>
                        <div className="single-info-item" style={{ backgroundImage: `url(${need__1})` }}>
                           <h5>M5 <i>TRANSITION</i> </h5>
                           <p>Front Page Introduction</p>
                        </div>
                     </div>
                  </div>

                  <div className="single-wrapper-info white-box">
                     <h4>Angelica’s Latest Interaction Report </h4>
                     <h6>Settling In</h6>
                     <span className="author-wrote">Wrote by Lana Wilson on June 8th, 2021</span>

                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Malesuada fames ac turpis egestas. Gravida cum sociis natoque
                        penatibus et magnis dis. Lacus laoreet non curabitur gravida arcu ac tortor dignissim. Lorem ipsum dolor sit amet consectetur adipiscing elit. Fringilla est ullamcorper eget nulla facilisi. Amet
                        nulla facilisi morbi tempus iaculis urna id volutpat. Amet porttitor eget dolor morbi non arcu risus. Sit amet consectetur adipiscing elit pellentesque habitant. Aliquam sem et tortor consequat
                        id porta nibh venenatis cras.</p>
                     <p>Consequat nisl vel pretium lectus quam id. Quisque non tellus orci ac. Sapien eget mi proin sed
                        libero enim sed faucibus turpis. Nisl condimentum id venenatis a condimentum vitae sapien
                        pellentesquehabitant. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum.
                        Sed enim ut sem viverra aliquet eget sit. At volutpat diam ut venenatis tellus in metus vulputate
                        eu. Ut etiam sit ametnisl. Ultrices neque ornare aenean euismod elementum nisi quis. Sed id
                        semper risus in.</p>
                     <p>Egestas integer eget aliquet nibh praesent tristique magna sit. Eu lobortis elementum nibh
                        tellus molestie nunc. Ut etiam sit amet nisl purus. Eu ultrices vitae auctor eu. Aenean euismod
                        elementumnisi quis eleifend quam. Suspendisse in est ante in nibh. Est ullamcorper eget nulla
                        facilisi etiam dignissim diam quis. Augue interdum velit euismod in. Augue eget arcu dictum
                        varius duis at consectetur lorem. Purus sit amet volutpat consequat mauris nunc congue. Facilisis magna etiam tempor orci. Pretium vulputate sapien nec sagittis aliquam. Diam phasellus
                        vestibulum lorem sed risus ultricies tristique. Sed egestas egestas fringilla phasellus faucibus
                        scelerisque eleifend donec pretium</p>


                     <a href="page-5.html" className="btn">Feedback? Contact Us</a>

                  </div>
               </div>
            </div>

         </div>
      </div>
   );
};

export default HHW__Content;
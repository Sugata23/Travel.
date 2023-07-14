import React,{useEffect} from "react";
import "./footer.css";
import video2 from "../../Assets/vid2.mp4";
import { BsSend } from "react-icons/bs";
import { MdTravelExplore } from "react-icons/md";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";
import { SiTripadvisor } from "react-icons/si";
import { FiChevronRight } from "react-icons/fi";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} muted autoPlay loop typeof="video/mp4"></video>
      </div>
      <div className="secContainer container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>Keep in touch</small>
            <h2>Travel with us</h2>
          </div>
          <div data-aos="fade-up" className="inputDiv flex">
            <input type="email" placeholder="Enter your email" />
            <button className="btn flex">
              SEND <BsSend className="icon" />
            </button>
          </div>
        </div>
        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdTravelExplore className="icon" />
                Travel.
              </a>
            </div>
            <div data-aos="fade-up" className="footerPara">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ullam autem debitis commodi suscipit dolor at. Modi, voluptate doloremque inventore eum quibusdam dicta perferendis mollitia excepturi aliquid! Ut, corporis quas.
            </div>
            <div data-aos="fade-up" className="footerSocial flex">
              <TiSocialTwitter className="icon" />
              <TiSocialYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <SiTripadvisor className="icon" />
            </div>
          </div>
          <div className="footerLink grid">
            {/* group1 */}
            <div data-aos="fade-up" data-aos-duration="3000" className="linkGrp">
              <span className="footerTitle">OUR AGENCY</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Tourism
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Payment
              </li>
            </div>
            {/* group2 */}
            <div data-aos="fade-up" data-aos-duration="4000" className="linkGrp">
              <span className="footerTitle">PARTNERS</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Booking
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Rental cars
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                HotelWorld
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Trivago
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                TripAdvisor
              </li>
            </div>
            {/* group3 */}
            <div data-aos="fade-up" data-aos-duration="5000" className="linkGrp">
              <span className="footerTitle">LAST MINUTE</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                London
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                California
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Indonesia
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Europe
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Oceania
              </li>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

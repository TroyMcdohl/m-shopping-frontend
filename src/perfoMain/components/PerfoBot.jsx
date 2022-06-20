import "./perfoBot.css";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const PerfoBot = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="perfobot_container">
      <div data-aos="fade-down">
        <h4 className="perfobot_title">My Projects</h4>
        <div className="perfobot_wrapper">
          <div className="perfobot_left">
            <div className="perfobot_left_des">
              <h6 className="perfobot_left_contact">
                This is my projects that are made by me while learning.There are
                just a few project that i practise while learning and after.Hope
                you can see my skill with that projects.
              </h6>
            </div>
          </div>
          <div className="perfobot_right">
            <div className="perfobot_right_container">
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <div className="perfobot_right_wrapper">
                    <a href={"https://mern-clinic-frontend.herokuapp.com/"}>
                      <div className="perfobot_right_card">
                        <img
                          src={require("../../outsideImg/clinic.png")}
                          alt="hello"
                          className="perfobot_right_img"
                        />
                      </div>
                    </a>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="perfobot_right_wrapper">
                    <a href={"https://mern-shopping.herokuapp.com/"}>
                      <div className="perfobot_right_card">
                        <img
                          src={require("../../outsideImg/shop.PNG")}
                          alt="hello"
                          className="perfobot_right_img"
                        />
                      </div>
                    </a>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="perfobot_right_wrapper">
                    <a href={"https://troygame-frontend.herokuapp.com/"}>
                      <div className="perfobot_right_card">
                        <img
                          src={require("../../outsideImg/game.png")}
                          alt="hello"
                          className="perfobot_right_img"
                        />
                      </div>
                    </a>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfoBot;

import React from "react";

import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import story1 from "./assets/images/profile.png";
import story2 from "./assets/images/story1.png";
import story4 from "./assets/images/story4.png";
import story5 from "./assets/images/story5.png";
import story6 from "./assets/images/story6.png";
import story7 from "./assets/images/story7.png";
import story8 from "./assets/images/story8.png";
import story9 from "./assets/images/story9.png";
import story10 from "./assets/images/story2.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import "./App.css";

// import required modules
import { Navigation } from "swiper/modules";

const Feed = () => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));

  return (
    <>
      <Swiper
        slidesPerView={8}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper owl-theme my-lg-4"
        breakpoints={{
          320: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          370: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          460: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
          520: {
            slidesPerView: 7,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 7,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 9,
            spaceBetween: 10,
          },
          992: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 9,
            spaceBetween: 10,
          },
          1440: {
            slidesPerView: 9,
            spaceBetween: 10,
          },
        }}
      >
        <SwiperSlide>
          <div class="item my-story">
            <img src={story1} alt="story"></img>
            <div class="icon">+</div>
            <span>your_story</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div class="item">
            <Stack direction="row" spacing={2}>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar src={story2} alt="story" className="avatar-size" />
              </StyledBadge>
            </Stack>
            <span>frozen-froz</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="item gradient-border">
            <img src={story6} alt="story"></img>
            <span>lonely_guy</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="item gradient-border">
            <img src={story4} alt="story"></img>
            <span>Felina-Mein</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="item gradient-border">
            <img src={story5} alt="story"></img>
            <span>Abishek_trainee</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="item gradient-border">
            <img src={story6} alt="story"></img>
            <span>little_prince</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="item gradient-border">
            <img src={story7} alt="story"></img>
            <span>king_maker</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="item gradient-border">
            <img src={story8} alt="story"></img>
            <span>dark_tune</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div class="item gradient-border">
            <img src={story9} alt="story"></img>
            <span>full_stocker</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div class="item gradient-border">
            <img src={story10} alt="story"></img>
            <span>tiny_pretty</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="item gradient-border">
            <img src={story7} alt="story"></img>
            <span>king_maker</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="item gradient-border">
            <img src={story8} alt="story"></img>
            <span>dark_tune</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div class="item gradient-border">
            <img src={story9} alt="story"></img>
            <span>full_stocker</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="item gradient-border">
            <img src={story7} alt="story"></img>
            <span>king_maker</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="item gradient-border">
            <img src={story8} alt="story"></img>
            <span>dark_tune</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div class="item gradient-border">
            <img src={story9} alt="story"></img>
            <span>full_stocker</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Feed;

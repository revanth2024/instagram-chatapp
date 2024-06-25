import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import brand from "./assets/images/behindwoodslogo.png";
import vijaylogo from "./assets/images/vijay.jpg";
import { MdVerified } from "react-icons/md";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";

import post1 from "./assets/images/postbehindswoods.png";

import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { BiMessageRounded } from "react-icons/bi";
import { LuSend } from "react-icons/lu";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./App.css";

import CircularProgress from "@mui/material/CircularProgress";
import { Pagination } from "swiper/modules";

function Post() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <>
      <section className="post-section">
        <Container fluid>
          <Row>
            <Col className="brand-top" xs={9}>
              <img
                src={vijaylogo}
                alt="brand"
                fluid
                style={{ height: "40px", borderRadius: "50%" }}
              ></img>
              <span className="brand">
                Vijay television <MdVerified /> . <span>2 h</span>
              </span>
            </Col>

            <Col style={{ textAlign: "end" }} xs={3}>
              <Tooltip title="More Options">
                <IconButton className="three-dot" onClick={handleClickOpen}>
                  <HiOutlineDotsHorizontal />
                </IconButton>
              </Tooltip>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <iframe
                className="post-image"
                width="1045"
                height="380"
                src="https://www.youtube.com/embed/Pn6KXGsEy78"
                title="எப்படி வந்து சிக்கிருக்கேன் பாத்தியா. 🤣#Pugazh VS #Srushti - Part 2 |Cooku with Comali 4|Best O Best"
                frameborder="1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </Col>
          </Row>
          <Row>
            <Col
              className=" {margin-right:
                10px
            }"
            >
              <Checkbox
                className="like-button"
                icon={
                  <FavoriteBorder className="like-icon" sx={{ fontSize: 30 }} />
                }
                checkedIcon={<Favorite sx={{ color: "red", fontSize: 30 }} />}
              />
              <BiMessageRounded
                className="comment-box "
                style={{ marginRight: "9px" }}
              />
              <LuSend className="share-icon" />
            </Col>
            <Col style={{ textAlign: "end" }}>
              <Checkbox
                {...label}
                icon={
                  <BookmarkBorderIcon
                    sx={{ color: "var(--span-color)", fontSize: 30 }}
                  />
                }
                checkedIcon={
                  <BookmarkIcon
                    sx={{ color: "var(--span-color)", fontSize: 30 }}
                  />
                }
              />
            </Col>
          </Row>
          <Row>
            <Col className="likes-icon">
              <AvatarGroup total={8} className="avatar-group">
                <Avatar
                  alt="avatar"
                  src={require("./assets/images/avatar8.jpg")}
                  sx={{ width: 24, height: 24 }}
                />
                <Avatar
                  alt="avatar"
                  src={require("./assets/images/story2.png")}
                  sx={{ width: 24, height: 24 }}
                />
                <Avatar
                  alt="avatarr"
                  src={require("./assets/images/avatar12.jpg")}
                  sx={{ width: 24, height: 24 }}
                />
                <Avatar
                  alt="avatar"
                  src={require("./assets/images/avatar14.jpg")}
                  sx={{ width: 24, height: 24 }}
                />
              </AvatarGroup>
              <span>11,263 likes</span>
            </Col>
          </Row>
        </Container>
        <div className="post-footer">
          <span className="brand-two content-footer">
            Vijay television <MdVerified />
            <span>"Stress Buster"..</span>
          </span>
          <p className="brand-two">See Translation</p>
          <p className="brand-two fw-light">View all 7,410 comments</p>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 0, width: "97%" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-basic"
              label="Add a comment..."
              variant="standard"
            />
          </Box>
        </div>

        <Container fluid>
          <Row>
            <Col className="brand-top mb-3" xs={9}>
              <img
                src={require("./assets/images/messi-logo.jpg")}
                alt="brand"
                fluid
                style={{ height: "40px", borderRadius: "50%" }}
              ></img>

              <span className="brand">
                leomessi&ensp;
                <MdVerified /> . <span>2 days ago</span>
              </span>
            </Col>
            <Col style={{ textAlign: "end" }} xs={3}>
              <Tooltip title="More Options">
                <IconButton className="three-dot" onClick={handleClickOpen}>
                  <HiOutlineDotsHorizontal />
                </IconButton>
              </Tooltip>
            </Col>
          </Row>
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            className="mySwiper slider mt-0"
            mousewheel={true}
            navigation={true}
            modules={[Navigation, Mousewheel, Pagination]}
          >
            <SwiperSlide>
              <img
                src={require("./assets/images/messi1.jpg")}
                alt="slide"
                fluid
              ></img>
            </SwiperSlide>
            <SwiperSlide className="slider">
              <img
                src={require("./assets/images/messi2.jpg")}
                alt="slide"
                fluid
              ></img>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                src={require("./assets/images/messi3.jpg")}
                alt="slide"
                fluid
              ></img>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                src={require("./assets/images/messi4.jpg")}
                alt="slide"
                fluid
              ></img>
            </SwiperSlide>
          </Swiper>
          <Row>
            <Col
              className="{margin-right:
                10px
            }"
            >
              <Checkbox
                {...label}
                icon={
                  <FavoriteBorder className="like-icon" sx={{ fontSize: 30 }} />
                }
                checkedIcon={<Favorite sx={{ color: "red", fontSize: 30 }} />}
              />
              <BiMessageRounded
                className="comment-box "
                style={{ marginRight: "9px" }}
              />
              <LuSend className="share-icon" />
            </Col>
            <Col style={{ textAlign: "end" }}>
              <Checkbox
                {...label}
                icon={
                  <BookmarkBorderIcon
                    sx={{ color: "var(--span-color)", fontSize: 30 }}
                  />
                }
                checkedIcon={
                  <BookmarkIcon
                    sx={{ color: "var(--span-color)", fontSize: 30 }}
                  />
                }
              />
            </Col>
          </Row>
          <Row>
            <Col className="likes-icon">
              <AvatarGroup total={2} className="avatar-group">
                <Avatar
                  alt="avatar"
                  src={require("./assets/images/avatar8.jpg")}
                  sx={{ width: 24, height: 24 }}
                />

                <Avatar
                  alt="avatar"
                  src={require("./assets/images/avatar14.jpg")}
                  sx={{ width: 24, height: 24 }}
                />
              </AvatarGroup>
              <span>24k likes</span>
            </Col>
          </Row>
        </Container>
        <div className="post-footer">
          <span className="brand-two content-footer">
            leomessi <MdVerified />
            <span>King of football ⚽️ 🐐❤️</span>
          </span>
          <p className="brand-two">See Translation</p>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 0, width: "97%" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-basic"
              label="Add a comment..."
              variant="standard"
            />
          </Box>
        </div>

        <Container fluid>
          <Row>
            <Col className="brand-top" xs={9}>
              <img
                src={brand}
                alt="brand"
                fluid
                style={{ height: "40px" }}
              ></img>
              <span className="brand">
                Behindwoods <MdVerified /> . <span>5 h</span>
              </span>
            </Col>
            <Col style={{ textAlign: "end" }} xs={3}>
              <Tooltip title="More Options">
                <IconButton className="three-dot" onClick={handleClickOpen}>
                  <HiOutlineDotsHorizontal />
                </IconButton>
              </Tooltip>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <img
                src={post1}
                alt="behindwoods"
                fluid
                className="post-image"
              ></img>
            </Col>
          </Row>
          <Row>
            <Col
              className="{margin-right:
                10px
            }"
            >
              <Checkbox
                {...label}
                icon={
                  <FavoriteBorder className="like-icon" sx={{ fontSize: 30 }} />
                }
                checkedIcon={<Favorite sx={{ color: "red", fontSize: 30 }} />}
              />
              <BiMessageRounded
                className="comment-box "
                style={{ marginRight: "9px" }}
              />
              <LuSend className="share-icon" />
            </Col>
            <Col style={{ textAlign: "end" }}>
              <Checkbox
                {...label}
                icon={
                  <BookmarkBorderIcon
                    sx={{ color: "var(--span-color)", fontSize: 30 }}
                  />
                }
                checkedIcon={
                  <BookmarkIcon
                    sx={{ color: "var(--span-color)", fontSize: 30 }}
                  />
                }
              />
            </Col>
          </Row>
          <Row>
            <Col className="likes-icon">
              <AvatarGroup total={12} className="avatar-group">
                <Avatar
                  alt="avatar"
                  src={require("./assets/images/avatar8.jpg")}
                  sx={{ width: 24, height: 24 }}
                />
                <Avatar
                  alt="avatar"
                  src={require("./assets/images/story2.png")}
                  sx={{ width: 24, height: 24 }}
                />
                <Avatar
                  alt="avatarr"
                  src={require("./assets/images/avatar12.jpg")}
                  sx={{ width: 24, height: 24 }}
                />
                <Avatar
                  alt="avatar"
                  src={require("./assets/images/avatar14.jpg")}
                  sx={{ width: 24, height: 24 }}
                />
              </AvatarGroup>
              <span>23,193 likes</span>
            </Col>
          </Row>
        </Container>
        <div className="post-footer">
          <span className="brand-two content-footer">
            Behindwoods <MdVerified />
            <span>Lokesh kanagaraj gives behindwoods 15th awards...</span>
          </span>
          <p className="brand-two">See Translation</p>
          <p className="brand-two fw-light">View all 265 comments</p>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 0, width: "97%" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-basic"
              label="Add a comment..."
              variant="standard"
            />
          </Box>
        </div>

        <Container fluid>
          <Row>
            <Col className="brand-top" xs={9}>
              <img
                src={require("./assets/images/newslogo.png")}
                alt="brand"
                fluid
                style={{ height: "40px" }}
              ></img>
              <span className="brand">
                Sunnews&ensp;
                <MdVerified /> . <span>10 h</span>
              </span>
            </Col>
            <Col style={{ textAlign: "end" }} xs={3}>
              <Tooltip title="More Options">
                <IconButton className="three-dot" onClick={handleClickOpen}>
                  <HiOutlineDotsHorizontal />
                </IconButton>
              </Tooltip>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <img
                src={require("./assets/images/chndrayanimage.jpg")}
                alt="behindwoods"
                fluid
                className="post-image"
              ></img>
            </Col>
          </Row>
          <Row>
            <Col
              className="{margin-right:
                10px
            }"
            >
              <Checkbox
                {...label}
                icon={
                  <FavoriteBorder className="like-icon" sx={{ fontSize: 30 }} />
                }
                checkedIcon={<Favorite sx={{ color: "red", fontSize: 30 }} />}
              />
              <BiMessageRounded
                className="comment-box "
                style={{ marginRight: "9px" }}
              />
              <LuSend className="share-icon" />
            </Col>
            <Col style={{ textAlign: "end" }}>
              <Checkbox
                {...label}
                icon={
                  <BookmarkBorderIcon
                    sx={{ color: "var(--span-color)", fontSize: 30 }}
                  />
                }
                checkedIcon={
                  <BookmarkIcon
                    sx={{ color: "var(--span-color)", fontSize: 30 }}
                  />
                }
              />
            </Col>
          </Row>
          <Row>
            <Col className="likes-icon">
              <AvatarGroup total={2} className="avatar-group">
                <Avatar
                  alt="avatar"
                  src={require("./assets/images/avatar8.jpg")}
                  sx={{ width: 24, height: 24 }}
                />

                <Avatar
                  alt="avatar"
                  src={require("./assets/images/avatar14.jpg")}
                  sx={{ width: 24, height: 24 }}
                />
              </AvatarGroup>
              <span>189 likes</span>
            </Col>
          </Row>
        </Container>
        <div className="post-footer">
          <span className="brand-two content-footer">
            Sunnews <MdVerified />
            <span>
              Vikram lander successfully lands on moon at south pole...more
            </span>
          </span>
          <p className="brand-two">See Translation</p>
          <p className="brand-two fw-light">View all 165 comments</p>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 0, width: "97%" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-basic"
              label="Add a comment..."
              variant="standard"
            />
          </Box>
        </div>

        <Container fluid>
          <Row>
            <Col className="brand-top" xs={9}>
              <img
                src={require("./assets/images/medialogo.jpg")}
                alt="brand"
                fluid
                style={{ height: "40px" }}
              ></img>
              <span className="brand">
                Sevenscreenstudios&ensp;
                <MdVerified /> . <span>1 day ago</span>
              </span>
            </Col>
            <Col style={{ textAlign: "end" }} xs={3}>
              <Tooltip title="More Options">
                <IconButton className="three-dot" onClick={handleClickOpen}>
                  <HiOutlineDotsHorizontal />
                </IconButton>
              </Tooltip>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <img
                src={require("./assets/images/leoupdate.jpeg")}
                alt="seven"
                fluid
                className="post-image"
              ></img>
            </Col>
          </Row>
          <Row>
            <Col
              className="{margin-right:
                10px
            }"
            >
              <Checkbox
                {...label}
                icon={
                  <FavoriteBorder className="like-icon" sx={{ fontSize: 30 }} />
                }
                checkedIcon={<Favorite sx={{ color: "red", fontSize: 30 }} />}
              />
              <BiMessageRounded
                className="comment-box "
                style={{ marginRight: "9px" }}
              />
              <LuSend className="share-icon" />
            </Col>
            <Col style={{ textAlign: "end" }}>
              <Checkbox
                {...label}
                icon={
                  <BookmarkBorderIcon
                    sx={{ color: "var(--span-color)", fontSize: 30 }}
                  />
                }
                checkedIcon={
                  <BookmarkIcon
                    sx={{ color: "var(--span-color)", fontSize: 30 }}
                  />
                }
              />
            </Col>
          </Row>
          <Row>
            <Col className="likes-icon">
              <AvatarGroup total={4} className="avatar-group">
                <Avatar
                  alt="avatar"
                  src={require("./assets/images/avatar8.jpg")}
                  sx={{ width: 24, height: 24 }}
                />

                <Avatar
                  alt="avatar"
                  src={require("./assets/images/avatar14.jpg")}
                  sx={{ width: 24, height: 24 }}
                />
              </AvatarGroup>
              <span>28,156 likes</span>
            </Col>
          </Row>
        </Container>
        <div className="post-footer">
          <span className="brand-two content-footer">
            Sevenscreenstudios <MdVerified />
            <span>Leo shooting was finished.coming theatre on oct 15</span>
          </span>
          <p className="brand-two">See Translation</p>
          <p className="brand-two fw-light">View all 569 comments</p>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 0, width: "97%" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-basic"
              label="Add a comment..."
              variant="standard"
            />
          </Box>
        </div>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <div className="more-option-dialog">
                <span style={{ color: "red" }}>Report</span>
                <span style={{ color: "red" }}>Unfollow</span>
                <span>Add to favourites</span>
                <span>Go to post</span>
                <span>Share to...</span>
                <span>Copy link</span>
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </section>
    </>
  );
}

export default Post;

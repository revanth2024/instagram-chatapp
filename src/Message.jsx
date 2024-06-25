import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./App.css";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import { LuSend } from "react-icons/lu";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { IoIosSearch } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import image1 from "./assets/images/sneha.jpg";
import image2 from "./assets/images/image2.jpg";
import image3 from "./assets/images/image3.jpg";
import image4 from "./assets/images/image4.jpg";
import image5 from "./assets/images/image5.png";
import image6 from "./assets/images/image6.jpg";
import Tooltip from "@mui/material/Tooltip";
import { TbMessageCircle } from "react-icons/tb";
import { Modal } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { IoIosSend } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaRegFaceSmile } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import * as React from "react";
import SendIcon from "@mui/icons-material/Send";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showPopup, setShowPopup] = useState(false);

  const [inputtag, setInputtag] = useState("");

  function changevalue(event) {
    setInputtag(event.target.value);
  }
  const [array, setArray] = useState([]);

  const addingdata = () => {
    if (inputtag === "") {
      alert("Enter message here");
    } else {
      setArray([...array, { textvalue: inputtag }]);
      setInputtag("");
      toast.success("Message sent Successfully", {
        position: "bottom-left",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const deletebutton = (data) => {
    let save = array.filter(
      (dltbutton) => dltbutton.textvalue !== data.textvalue
    );
    setArray(save);
  };

  const chatbox = () => {
    setShowPopup(true);
  };
  const closeBox = () => {
    setShowPopup(false);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const editHandleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal show={showPopup} onHide={closeBox} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Messages</Modal.Title>
        </Modal.Header>
        <Modal.Body className="pb-0">
          <p className="opponentchat">
            Hey Dude,following up on last chat.Did you get a chance to check out
            the new tutorial video I shared?
          </p>
          <p className="mychat">
            Yeah,it was super helpful.I still have a few questions,can we jump
            on a quick call this week?
          </p>
          <p className="opponentchat">Absolutely! When would be good for you</p>
          <p className="opponentchat">Are you free now?</p>
          {array.map((data) => (
            <div className="new-data">
              <p className="update-chat mt-1">{data.textvalue}</p>
              <IoCloseCircleOutline onClick={() => deletebutton(data)} />
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <TextField
            id="input-with-icon-textfield"
            value={inputtag}
            onChange={changevalue}
            placeholder="Type your message here..."
            fullWidth
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FaRegFaceSmile style={{ color: "black" }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IoIosSend
                    onClick={addingdata}
                    style={{
                      cursor: "pointer",
                      color: "black",
                      fontSize: "30px",
                    }}
                  />
                  <ToastContainer
                    position="bottom-left"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                  />
                </InputAdornment>
              ),
            }}
          />
        </Modal.Footer>
      </Modal>

      <Dialog
        open={open}
        onClose={editHandleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            editHandleClose();
          },
        }}
      >
        <DialogTitle>New message</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Find the people in Instagram friends by searching usernames,
            checking followers, following lists, or using mutual friend
            suggestions.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            name="email"
            label="To:"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions className="chat-icon">
          <Button variant="contained" type="submit" endIcon={<SendIcon />}>
            Chat
          </Button>
        </DialogActions>
      </Dialog>
      <Box
        sx={{ width: 30, height: 30 }}
        onClick={handleShow}
        className="messageicon"
      >
        <Badge
          badgeContent={4}
          color="error"
          sx={{
            "& .MuiBadge-badge": {
              border: "1px solid white",
              animation: "pulse 1s infinite ease-in-out",
              transform: "translate(8px, -6px)",
            },
            "@keyframes pulse": {
              "0%": {
                boxShadow: "0 0 0px 0px rgb(220 0 0 / 20%);",
                opacity: 1,
              },
              "100%": {
                boxShadow: "0 0 0px 7px rgb(223 0 0 / 28%)",
                opacity: 0.8,
              },
            },
          }}
        >
          <LuSend className="share-icon" sx={{ fontSize: "23px" }} />
        </Badge>
      </Box>

      <div>
        <Offcanvas
          className="custom-backdrop"
          show={show}
          onHide={handleClose}
          placement="end"
          backdrop="static"
          responsive="lg"
        >
          <Offcanvas.Header closeButton className="desktop-offcanvas-header">
            <Offcanvas.Title className="message-title">
              <div>Messages</div>
              <div className="edit-icon">
                <FaRegEdit onClick={handleClickOpen} />
              </div>
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: "100%",
              }}
            >
              <IconButton sx={{ p: "10px" }} aria-label="menu">
                <IoIosSearch />
              </IconButton>
              <InputBase
                sx={{ flex: 1 }}
                placeholder="Search"
                inputProps={{ "aria-label": "Search" }}
              />
              <Divider sx={{ height: 25, m: 0.8 }} orientation="vertical" />
              <IconButton type="button" sx={{ p: "5px" }} aria-label="search">
                <IoIosClose />
              </IconButton>
            </Paper>
            <div className="message-heading">
              <span>Recent</span>
              <span>Request</span>
            </div>

            <div className="message-flex" onClick={chatbox}>
              <div className="message-img">
                <img src={image1} alt="story" fluid></img>
              </div>
              <div className="person-detail">
                <span>Sneha_prosepina</span>
                <span>Kindly check the details. Just Now</span>
              </div>
              <div className="msg-icon">
                <Tooltip title="New Message" arrow>
                  <IconButton className="msg-dot">
                    <Badge
                      variant="dot"
                      color="error"
                      sx={{
                        "& .MuiBadge-badge": {
                          border: "1px solid white",
                          animation: "pulse 0.9s infinite ease-in-out",
                          transform: "translate(0px)",
                          width: "10px",
                          height: "10px",
                          borderRadius: "10px",
                        },
                        "@keyframes pulse": {
                          "0%": {
                            boxShadow: "0 0 0px 0px rgb(220 0 0 / 20%);",
                            opacity: 1,
                          },
                          "100%": {
                            boxShadow: "0 0 0px 7px rgb(223 0 0 / 28%)",
                            opacity: 0.8,
                          },
                        },
                      }}
                    >
                      <TbMessageCircle variant="dot" />
                    </Badge>
                  </IconButton>
                </Tooltip>
              </div>
            </div>

            <div className="message-flex" onClick={chatbox}>
              <div className="message-img">
                <img src={image2} alt="story" fluid></img>
              </div>
              <div className="person-detail">
                <span>Princess_fuzzie</span>
                <span>share a post.10m ago</span>
              </div>
              <div className="msg-icon">
                <Tooltip title="New Message" arrow>
                  <IconButton className="msg-dot">
                    <Badge
                      variant="dot"
                      color="error"
                      sx={{
                        "& .MuiBadge-badge": {
                          border: "1px solid white",
                          animation: "pulse 0.9s infinite ease-in-out",
                          transform: "translate(0px)",
                          width: "10px",
                          height: "10px",
                          borderRadius: "10px",
                        },
                        "@keyframes pulse": {
                          "0%": {
                            boxShadow: "0 0 0px 0px rgb(220 0 0 / 20%);",
                            opacity: 1,
                          },
                          "100%": {
                            boxShadow: "0 0 0px 7px rgb(223 0 0 / 28%)",
                            opacity: 0.8,
                          },
                        },
                      }}
                    >
                      <TbMessageCircle variant="dot" />
                    </Badge>
                  </IconButton>
                </Tooltip>
              </div>
            </div>

            <div className="message-flex" onClick={chatbox}>
              <div className="message-img">
                <img src={image3} alt="story" fluid></img>
              </div>
              <div className="person-detail">
                <span>Frontent_developer</span>
                <span>Active 2m ago</span>
              </div>
              <div className="msg-icon">
                <Tooltip title="New Message" arrow>
                  <IconButton className="msg-dot">
                    <Badge
                      variant="dot"
                      color="error"
                      sx={{
                        "& .MuiBadge-badge": {
                          border: "1px solid white",
                          animation: "pulse 0.9s infinite ease-in-out",
                          transform: "translate(0px)",
                          width: "10px",
                          height: "10px",
                          borderRadius: "10px",
                        },
                        "@keyframes pulse": {
                          "0%": {
                            boxShadow: "0 0 0px 0px rgb(220 0 0 / 20%);",
                            opacity: 1,
                          },
                          "100%": {
                            boxShadow: "0 0 0px 7px rgb(223 0 0 / 28%)",
                            opacity: 0.8,
                          },
                        },
                      }}
                    >
                      <TbMessageCircle variant="dot" />
                    </Badge>
                  </IconButton>
                </Tooltip>
              </div>
            </div>

            <div className="message-flex" onClick={chatbox}>
              <div className="message-img">
                <img src={image4} alt="story" fluid></img>
              </div>
              <div className="person-detail">
                <span>Christiona_ronaldo</span>
                <span>Active 2h ago</span>
              </div>
              <div className="msg-icon">
                <Tooltip title="New Message" arrow>
                  <IconButton className="msg-dot">
                    <Badge
                      variant="dot"
                      color="error"
                      sx={{
                        "& .MuiBadge-badge": {
                          border: "1px solid white",
                          animation: "pulse 0.9s infinite ease-in-out",
                          transform: "translate(0px)",
                          width: "10px",
                          height: "10px",
                          borderRadius: "10px",
                        },
                        "@keyframes pulse": {
                          "0%": {
                            boxShadow: "0 0 0px 0px rgb(220 0 0 / 20%);",
                            opacity: 1,
                          },
                          "100%": {
                            boxShadow: "0 0 0px 7px rgb(223 0 0 / 28%)",
                            opacity: 0.8,
                          },
                        },
                      }}
                    >
                      <TbMessageCircle variant="dot" />
                    </Badge>
                  </IconButton>
                </Tooltip>
              </div>
            </div>

            <div className="message-flex" onClick={chatbox}>
              <div className="message-img">
                <img
                  src={require("./assets/images/messi.jpg")}
                  alt="story"
                  fluid
                ></img>
              </div>
              <div className="person-detail">
                <span>Lionel_andres_messi</span>
                <span>Kindly check the details. Just Now</span>
              </div>
              <div className="msg-icon">
                <Tooltip title="New Message" arrow>
                  <IconButton className="msg-dot">
                    <Badge
                      variant="dot"
                      color="error"
                      sx={{
                        "& .MuiBadge-badge": {
                          border: "1px solid white",
                          animation: "pulse 0.9s infinite ease-in-out",
                          transform: "translate(0px)",
                          width: "10px",
                          height: "10px",
                          borderRadius: "10px",
                        },
                        "@keyframes pulse": {
                          "0%": {
                            boxShadow: "0 0 0px 0px rgb(220 0 0 / 20%);",
                            opacity: 1,
                          },
                          "100%": {
                            boxShadow: "0 0 0px 7px rgb(223 0 0 / 28%)",
                            opacity: 0.8,
                          },
                        },
                      }}
                    >
                      <TbMessageCircle variant="dot" />
                    </Badge>
                  </IconButton>
                </Tooltip>
              </div>
            </div>

            <div className="message-flex" onClick={chatbox}>
              <div className="message-img">
                <img src={image5} alt="story" fluid></img>
              </div>
              <div className="person-detail">
                <span>Web D School</span>
                <span>share a post.10h ago</span>
              </div>
              <div className="msg-icon">
                <Tooltip title="New Message" arrow>
                  <IconButton className="msg-dot">
                    <Badge
                      variant="dot"
                      color="error"
                      sx={{
                        "& .MuiBadge-badge": {
                          border: "1px solid white",
                          animation: "pulse 0.9s infinite ease-in-out",
                          transform: "translate(0px)",
                          width: "10px",
                          height: "10px",
                          borderRadius: "10px",
                        },
                        "@keyframes pulse": {
                          "0%": {
                            boxShadow: "0 0 0px 0px rgb(220 0 0 / 20%);",
                            opacity: 1,
                          },
                          "100%": {
                            boxShadow: "0 0 0px 7px rgb(223 0 0 / 28%)",
                            opacity: 0.8,
                          },
                        },
                      }}
                    >
                      <TbMessageCircle variant="dot" />
                    </Badge>
                  </IconButton>
                </Tooltip>
              </div>
            </div>

            <div className="message-flex" onClick={chatbox}>
              <div className="message-img">
                <img src={image6} alt="story" fluid></img>
              </div>
              <div className="person-detail">
                <span>Franklin_freeke</span>
                <span>share a post.1d ago</span>
              </div>
              <div className="msg-icon">
                <Tooltip title="New Message" arrow>
                  <IconButton className="msg-dot">
                    <Badge
                      variant="dot"
                      color="error"
                      sx={{
                        "& .MuiBadge-badge": {
                          border: "1px solid white",
                          animation: "pulse 0.9s infinite ease-in-out",
                          transform: "translate(0px)",
                          width: "10px",
                          height: "10px",
                          borderRadius: "10px",
                        },
                        "@keyframes pulse": {
                          "0%": {
                            boxShadow: "0 0 0px 0px rgb(220 0 0 / 20%);",
                            opacity: 1,
                          },
                          "100%": {
                            boxShadow: "0 0 0px 7px rgb(223 0 0 / 28%)",
                            opacity: 0.8,
                          },
                        },
                      }}
                    >
                      <TbMessageCircle variant="dot" />
                    </Badge>
                  </IconButton>
                </Tooltip>
              </div>
            </div>

            <div className="message-flex" onClick={chatbox}>
              <div className="message-img">
                <img src={image2} alt="story" fluid></img>
              </div>
              <div className="person-detail">
                <span>Princess_fuzzie</span>
                <span>share a post.10m ago</span>
              </div>
              <div className="msg-icon">
                <Tooltip title="New Message" arrow>
                  <IconButton className="msg-dot">
                    <Badge
                      variant="dot"
                      color="error"
                      sx={{
                        "& .MuiBadge-badge": {
                          border: "1px solid white",
                          animation: "pulse 0.9s infinite ease-in-out",
                          transform: "translate(0px)",
                          width: "10px",
                          height: "10px",
                          borderRadius: "10px",
                        },
                        "@keyframes pulse": {
                          "0%": {
                            boxShadow: "0 0 0px 0px rgb(220 0 0 / 20%);",
                            opacity: 1,
                          },
                          "100%": {
                            boxShadow: "0 0 0px 7px rgb(223 0 0 / 28%)",
                            opacity: 0.8,
                          },
                        },
                      }}
                    >
                      <TbMessageCircle variant="dot" />
                    </Badge>
                  </IconButton>
                </Tooltip>
              </div>
            </div>

            <div className="message-flex" onClick={chatbox}>
              <div className="message-img">
                <img src={image3} alt="story" fluid></img>
              </div>
              <div className="person-detail">
                <span>Frontent_developer</span>
                <span>Active 2m ago</span>
              </div>
              <div className="msg-icon">
                <Tooltip title="New Message" arrow>
                  <IconButton className="msg-dot">
                    <Badge
                      variant="dot"
                      color="error"
                      sx={{
                        "& .MuiBadge-badge": {
                          border: "1px solid white",
                          animation: "pulse 0.9s infinite ease-in-out",
                          transform: "translate(0px)",
                          width: "10px",
                          height: "10px",
                          borderRadius: "10px",
                        },
                        "@keyframes pulse": {
                          "0%": {
                            boxShadow: "0 0 0px 0px rgb(220 0 0 / 20%);",
                            opacity: 1,
                          },
                          "100%": {
                            boxShadow: "0 0 0px 7px rgb(223 0 0 / 28%)",
                            opacity: 0.8,
                          },
                        },
                      }}
                    >
                      <TbMessageCircle variant="dot" />
                    </Badge>
                  </IconButton>
                </Tooltip>
              </div>
            </div>
            <div className="message-flex" onClick={chatbox}>
              <div className="message-img">
                <img src={image2} alt="story" fluid></img>
              </div>
              <div className="person-detail">
                <span>Princess_fuzzie</span>
                <span>share a post.10m ago</span>
              </div>
              <div className="msg-icon">
                <Tooltip title="New Message" arrow>
                  <IconButton className="msg-dot">
                    <Badge
                      variant="dot"
                      color="error"
                      sx={{
                        "& .MuiBadge-badge": {
                          border: "1px solid white",
                          animation: "pulse 0.9s infinite ease-in-out",
                          transform: "translate(0px)",
                          width: "10px",
                          height: "10px",
                          borderRadius: "10px",
                        },
                        "@keyframes pulse": {
                          "0%": {
                            boxShadow: "0 0 0px 0px rgb(220 0 0 / 20%);",
                            opacity: 1,
                          },
                          "100%": {
                            boxShadow: "0 0 0px 7px rgb(223 0 0 / 28%)",
                            opacity: 0.8,
                          },
                        },
                      }}
                    >
                      <TbMessageCircle variant="dot" />
                    </Badge>
                  </IconButton>
                </Tooltip>
              </div>
            </div>

            <div className="message-flex" onClick={chatbox}>
              <div className="message-img">
                <img src={image3} alt="story" fluid></img>
              </div>
              <div className="person-detail">
                <span>Frontent_developer</span>
                <span>Active 2m ago</span>
              </div>
              <div className="msg-icon">
                <Tooltip title="New Message" arrow>
                  <IconButton className="msg-dot">
                    <Badge
                      variant="dot"
                      color="error"
                      sx={{
                        "& .MuiBadge-badge": {
                          border: "1px solid white",
                          animation: "pulse 0.9s infinite ease-in-out",
                          transform: "translate(0px)",
                          width: "10px",
                          height: "10px",
                          borderRadius: "10px",
                        },
                        "@keyframes pulse": {
                          "0%": {
                            boxShadow: "0 0 0px 0px rgb(220 0 0 / 20%);",
                            opacity: 1,
                          },
                          "100%": {
                            boxShadow: "0 0 0px 7px rgb(223 0 0 / 28%)",
                            opacity: 0.8,
                          },
                        },
                      }}
                    >
                      <TbMessageCircle variant="dot" />
                    </Badge>
                  </IconButton>
                </Tooltip>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}

export default Example;

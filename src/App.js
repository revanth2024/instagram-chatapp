import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Feed from "./Feed";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Post from "./Post";
import Message from "./Message";
import AppBar from "./Appbar";
import Themecolor from "./Themecolor";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  return (
    <>
      <Container fluid>
        <Row>
          <Col sm={4} lg={2} className="offcanvas-section">
            <AppBar isDarkTheme={isDarkTheme} />
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} className="main-post">
            <Feed />
            <Post />
          </Col>
          <Col xs={4} lg={4} className="d-none d-lg-block message-section">
            <Message />
          </Col>
        </Row>
        <Themecolor isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
      </Container>
    </>
  );
}

export default App;

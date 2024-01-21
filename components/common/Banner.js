import Image from "next/image";
import React from "react";
import { Container, Row, Col, Jumbotron, Button } from "react-bootstrap";

const Banner = ({ props }) => {
  // Navigation for URLS
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "start",
        // margin: "5px 30px 20px 30px",
      }}
    >
      <div
        style={{
          // fontWeight: "bold",
          fontSize: "1.2vw",
        }}
      >
        Environment: QA
      </div>
    </div>
  );
};

export default Banner;

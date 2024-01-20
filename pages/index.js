import React from "react";
import Script from "next/script";
import { Container } from "react-bootstrap";
import Home from "../components/home/Home";

function HomePage() {
  return (
    <>
      <Script src="/static/scripts.js"></Script>
      <Container>
        <Home />
      </Container>
    </>
  );
}

export default HomePage;

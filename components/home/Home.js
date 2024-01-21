import Link from "next/link";
import React from "react";
import { Container, Nav } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function Home() {
  let data = [
    {
      header: "Application Fraud",
      link: "/dashboard",
      info: "Predict and Prevent third party and first party fraud in applications accrouss credit cards and lending",
    },
    {
      header: "Identity Verification",
      link: "#",
      info: "Strategies to verify customer identity and determination of step-up authentication during non-monetary transactions",
    },
    {
      header: "Transaction Fraud",
      link: "#",
      info: "Predict and Prevent fraud in debit and credit transactions",
    },
  ];
  return (
    <Container
      style={{
        height: "75vh",
      }}
    >
      <Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="mb-3 mt-5"
      >
        <Tab eventKey="home" title=<h2>Home</h2>>
          <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
            {data.map((item, key) => (
              <div
                key={key}
                style={{
                  background: "#CED4DA",
                  width: "30vw",
                  padding: "3%",
                  marginTop: "40px",
                  border: "2px solid black",
                  boxShadow: "2px 2px 5px #ddddd",
                }}
              >
                <Link href={item.link} passHref>
                  <Nav.Link>
                    <h3>{item.header}</h3>
                  </Nav.Link>
                </Link>
                <p>{item.info}</p>
              </div>
            ))}
          </div>
        </Tab>
      </Tabs>
    </Container>
  );
}

export default Home;

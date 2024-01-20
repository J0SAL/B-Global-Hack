import React from "react";
import { Button, Container, Tab, Tabs } from "react-bootstrap";
import Note from "../components/dashboard/Note";
import Selection from "../components/dashboard/Selection";
import Link from "next/link";

function docs() {
  return (
    <div>
      <Container>
        <h2 className="mt-3">Application Fraud</h2>
        <Note />
        <Tabs
          defaultActiveKey="rulesets"
          id="uncontrolled-tab-example"
          className="mb-3 mt-5"
        >
          <Tab eventKey="rulesets" title="RuleSets">
            <Selection />
          </Tab>
          <Tab eventKey="approval" title="Approval Requests"></Tab>
          <Tab eventKey="deploy" title="Deployment Requests"></Tab>
          <Tab eventKey="test" title="Test hub"></Tab>
          <Tab eventKey="compare" title="Compare Rulesets"></Tab>
        </Tabs>
      </Container>
    </div>
  );
}

export default docs;

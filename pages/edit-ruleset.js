import React from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import Rules from "../components/rulesets/Rules";
import DataDictionary from "../components/rulesets/DataDictionary";
import GeneratedCode from "../components/rulesets/GeneratedCode";

function editRuleset() {
  return (
    <div style={{ height: "80vh" }}>
      <Container>
        <h2 className="mt-3">APPLY-CREDIT-CARD</h2>
        <Tabs
          defaultActiveKey="rules"
          id="uncontrolled-tab-example"
          className="mb-3 mt-5"
        >
          <Tab eventKey="rules" title="Rules">
            <Rules />
          </Tab>
          <Tab eventKey="data-dictionary" title="Data Dictionary">
            <DataDictionary />
          </Tab>
          <Tab eventKey="generated-code" title="Generated Code">
            <GeneratedCode />
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}

export default editRuleset;

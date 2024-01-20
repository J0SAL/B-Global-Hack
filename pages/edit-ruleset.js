import React from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import Rules from "../components/rulesets/Rules";
import DataDictionary from "../components/rulesets/DataDictionary";
import GeneratedCode from "../components/rulesets/GeneratedCode";
import Link from "next/link";
import { useRouter } from "next/router";

function editRuleset() {
  const router = useRouter();
  const { id } = router.query;
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
            <Rules id={id} />
          </Tab>
          <Tab eventKey="data-dictionary" title="Data Dictionary">
            <DataDictionary id={id} />
          </Tab>
          <Tab eventKey="generated-code" title="Generated Code">
            <GeneratedCode id={id} />
          </Tab>
        </Tabs>
        <Link href="/dashboard" passHref>
          <a>Back</a>
        </Link>
      </Container>
    </div>
  );
}

export default editRuleset;

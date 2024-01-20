import Link from "next/link";
import React, { useState } from "react";
import { Dropdown, Form, Nav } from "react-bootstrap";
import RulesTable from "./RulesTable";

function Selection() {
  const [ruleset, setRuleSet] = useState("");
  const [rulegroup, setRuleGroup] = useState("");

  return (
    <div>
      <div className="row">
        <div className="col-2 my-2">
          <div className="mb-2">Select Ruleset</div>
          <Form.Select size="md" onChange={(e) => setRuleSet(e.target.value)}>
            <option value=""></option>
            <option value="APPLY-CREDIT-CARD">APPLY-CREDIT-CARD</option>
            <option value="APPLICATION">APPLICATION</option>
            <option value="APPLY-INSTANT-BUS">APPLY-INSTANT-BUS</option>
            <option value="CARD-BLOCK">CARD-BLOCK</option>
          </Form.Select>
        </div>
        <div className="col-2 my-2">
          <div className="mb-2">Select Ruleset group</div>
          <Form.Select
            size="md"
            disabled={ruleset == ""}
            onChange={(e) => setRuleGroup(e.target.value)}
          >
            <option></option>
            <option value="champion">CHAMPION</option>
            <option value="shadow">SHADOW</option>
          </Form.Select>
        </div>
      </div>
      {rulegroup == "champion" && (
        <div className="row">
          <hr />
          <RulesTable />
        </div>
      )}
    </div>
  );
}

export default Selection;

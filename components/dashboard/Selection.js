import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { Button, Dropdown, Form, Nav } from "react-bootstrap";
import RulesTable from "./RulesTable";
import dataContext from "../../hooks/DataContext/dataContext";
import { alertBox } from "../../utils";

function Selection() {
  const { rulesets, addRuleset } = useContext(dataContext);
  const [rulesetData, setRulesetData] = useState([]);
  const [currentRuleset, setCurrentRuleSet] = useState("");
  const [currentRulesetgroup, setCurrentRulesetGroup] = useState("");

  useEffect(() => {
    if (!currentRuleset && !currentRulesetgroup) return;
    setRulesetData(
      rulesets?.filter(
        (ruleset) =>
          ruleset.name == currentRuleset && ruleset.group == currentRulesetgroup
      )
    );
  }, [rulesets, currentRuleset, currentRulesetgroup]);

  const [files, setFiles] = useState("");

  const handleFileChange = (e) => {
    try {
      const fileReader = new FileReader();
      fileReader.readAsText(e.target.files[0], "UTF-8");
      fileReader.onload = (e) => {
        setFiles(e.target.result);
      };
    } catch (e) {
      alertBox();
    }
  };

  useEffect(() => {
    if (files) {
      if (confirm("Add ruleset?")) {
        let jsonfile = JSON.parse(files);
        addRuleset(jsonfile);
      }
    }
  }, [files]);
  return (
    <div>
      <div className="row my-2">
        <div className="col-2">
          <div className="mb-2">Select Ruleset</div>
          <Form.Select
            size="md"
            onChange={(e) => setCurrentRuleSet(e.target.value)}
          >
            <option value="" hidden></option>
            <option value="APPLY-CREDIT-CARD">APPLY-CREDIT-CARD</option>
            <option value="APPLICATION">APPLICATION</option>
            <option value="APPLY-INSTANT-BUS">APPLY-INSTANT-BUS</option>
            <option value="CARD-BLOCK">CARD-BLOCK</option>
          </Form.Select>
        </div>
        <div className="col-2">
          <div className="mb-2">Select Ruleset group</div>
          <Form.Select
            size="md"
            disabled={currentRuleset == ""}
            onChange={(e) => setCurrentRulesetGroup(e.target.value)}
          >
            <option value="" hidden></option>
            <option value="CHAMPION">CHAMPION</option>
            <option value="SHADOW">SHADOW</option>
          </Form.Select>
        </div>
        <div className="col-2">
          <div className="mb-2">Upload a ruleset</div>
          <input
            type="file"
            accept=".json"
            onChange={handleFileChange}
            style={{
              color: "black",
              background: "white",
              border: "1px solid black",
            }}
          />
        </div>
      </div>
      <div className="row">
        <hr />
        {rulesetData && <RulesTable rulesetData={rulesetData} />}
      </div>
    </div>
  );
}

export default Selection;

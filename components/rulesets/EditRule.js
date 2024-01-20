import React, { useContext, useEffect, useState } from "react";
import dataContext from "../../hooks/DataContext/dataContext";
import { Button, Form } from "react-bootstrap";
import { alertBox } from "../../utils";

function EditRule() {
  const { activeRuleIndex, rules, editRuleData, setRules, setEditRuleData } =
    useContext(dataContext);
  useEffect(() => {
    setEditRuleData(rules[activeRuleIndex]?.ruleContent);
  }, [activeRuleIndex]);

  const handleRuleSave = () => {
    let newRules = rules;
    newRules[activeRuleIndex].ruleContent = editRuleData;
    setRules(newRules);
    // setEditRuleData("");
    alertBox(`${rules[activeRuleIndex].ruleName} Updated`, "success");
  };
  return (
    <>
      <div
        style={{
          boxShadow: "2px 2px 5px 2px lightblue",
          padding: "10px",
        }}
      >
        <Form.Control
          as="textarea"
          placeholder="Enter Your Rules"
          style={{ height: "45vh" }}
          onChange={(e) => setEditRuleData(e.target.value)}
          value={editRuleData}
          disabled={activeRuleIndex == null}
        ></Form.Control>
        <div
          style={{ display: "flex", justifyContent: "right", marginTop: "5px" }}
        >
          <Button onClick={() => handleRuleSave()}>Save</Button>
        </div>
      </div>
    </>
  );
}

export default EditRule;

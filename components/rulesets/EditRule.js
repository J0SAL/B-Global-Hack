import React, { useContext, useEffect, useState } from "react";
import dataContext from "../../hooks/DataContext/dataContext";
import { Button, Form } from "react-bootstrap";
import { alertBox } from "../../utils";

function EditRule({ id, editRule, setEditRule }) {
  const { activeRuleIndex, rulesets, updateRule } = useContext(dataContext);

  const [rules, setRules] = useState([]);
  useEffect(() => {
    if (id && rulesets) setRules(rulesets.find((item) => item.id == id)?.rules);
  }, [id, rulesets]);

  useEffect(() => {
    if (activeRuleIndex != null)
      setEditRule(rules.find((item) => item.rule_id == activeRuleIndex));
  }, [id, activeRuleIndex]);

  const handleRuleSave = () => {
    updateRule(id, editRule);
    alertBox(
      `${
        rules.find((item) => item.rule_id == activeRuleIndex).ruleName
      } Updated`,
      "success"
    );
  };
  return (
    <>
      <div
        style={{
          boxShadow: "2px 2px 5px 2px lightblue",
          padding: "10px",
          border: "1px solid black",
        }}
      >
        <Form.Control
          as="textarea"
          name="ruleContent"
          placeholder="Enter Your Rules"
          style={{ height: "45vh" }}
          onChange={(e) =>
            setEditRule({ ...editRule, ruleContent: e.target.value })
          }
          value={editRule?.ruleContent}
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

import React, { useState } from "react";
import AddRule from "./AddRule";
import EditRule from "./EditRule";

function Rules({ id }) {
  const [rule, setRule] = useState({
    ruleName: "",
    ruleContent: "",
  });
  const [editRule, setEditRule] = useState({
    ruleName: "",
    ruleContent: "",
    rule_id: null,
    order: null,
  });

  const handleChange = (event) => {
    if (event == null) {
      setRule({
        ruleName: "",
        ruleContent: "",
      });
      return;
    }
    setRule({ ...rule, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <div className="row">
        <div className="col-3">
          <AddRule
            id={id}
            rule={rule}
            editRule={editRule}
            handleChange={handleChange}
          />
        </div>
        <div className="col-9">
          <EditRule id={id} editRule={editRule} setEditRule={setEditRule} />
        </div>
      </div>
    </div>
  );
}

export default Rules;

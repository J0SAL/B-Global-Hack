import { faCirclePlus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import dataContext from "../../hooks/DataContext/dataContext";
import { alertBox } from "../../utils";

function AddRule() {
  const { activeRuleIndex, editRuleData, setActiveRuleIndex, rules, setRules } =
    useContext(dataContext);

  const [rule, setRule] = useState({
    ruleName: "",
    ruleContent: "",
  });

  const handleRuleChange = (e) => {
    setRule({
      ruleName: e.target.value,
      ruleContent: "",
    });
  };

  const handleIndexChange = (key) => {
    if (
      activeRuleIndex != null &&
      editRuleData != rules[activeRuleIndex].ruleContent
    ) {
      alertBox(
        `Please save ${rules[activeRuleIndex].ruleName} before moving to ${rules[key].ruleName}`
      );
      return;
    }

    setActiveRuleIndex(key);
  };
  const appendRule = () => {
    if (rules.length == 0) setActiveRuleIndex(0);
    setRules([...rules, rule]);
    handleCloseModal();
    setRule({
      ruleName: "",
      ruleContent: "",
    });
  };

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => {
    if (rules.length > 0 && rules[rules.length - 1].ruleContent == "") {
      alertBox(
        `Cannot create a rule as No content in ${
          rules[rules.length - 1].ruleName
        }`
      );
      return;
    }
    setShowModal(true);
  };

  return (
    <>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add rule</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="mb-1">Enter rule name</p>
          <InputGroup className="mb-3">
            <Form.Control
              name="ruleName"
              value={rule.ruleName}
              onChange={handleRuleChange}
              autoComplete="false"
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCloseModal}>Cancel</Button>
          <Button onClick={appendRule} disabled={!rule.ruleName}>
            Add Rule
          </Button>
        </Modal.Footer>
      </Modal>

      <div
        style={{
          boxShadow: "2px 2px 5px 2px lightblue",
          padding: "10px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "right" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              cursor: "pointer",
            }}
            onClick={handleShowModal}
          >
            {" "}
            <FontAwesomeIcon icon={faCirclePlus} />
            <span>Add Rule</span>
          </div>
        </div>
        <div
          style={{
            maxHeight: "45vh",
            height: "45vh",
            overflowY: "scroll",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            {rules.map((item, key) => (
              <div
                key={key}
                style={{
                  border: "1px solid black",
                  margin: "15px 0px",
                  padding: "10px",
                  width: "80%",
                  borderRadius: "5px",
                  cursor: "pointer",
                  border:
                    key == activeRuleIndex
                      ? "5px solid lightblue"
                      : "1px solid",
                }}
                onClick={() => handleIndexChange(key)}
              >
                {item.ruleName}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AddRule;

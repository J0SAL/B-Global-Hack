import { useEffect, useState } from "react";
import axiosClient from "./../../services/axios-client";
import DataContext from "./dataContext";

var demo_rulesets = [
  {
    id: 1,
    version: "2.1.1",
    status: "Draft",
    name: "APPLY-CREDIT-CARD",
    group: "CHAMPION",
    lastmodifiedby: "Joy Almieda",
    lastmodifieddate: "2023-12-22 08:56:36",
    options: [
      {
        name: "Edit Ruleset",
        link: "/edit-ruleset",
      },
      {
        name: "View change log",
        link: "",
      },
      {
        name: "Reset working copy",
        link: "",
      },
    ],
    rules: [
      {
        rule_id: 1,
        ruleName: "Rule1",
        ruleContent: "Rule1 Content",
      },
      {
        rule_id: 2,
        ruleName: "Rule2",
        ruleContent: "Rule2 Content",
      },
    ],
    dictionaries: [],
  },
  {
    id: 2,
    version: "2.1.0",
    status: "Champion",
    name: "APPLY-CREDIT-CARD",
    group: "CHAMPION",
    lastmodifiedby: "Omkar Pavtekar",
    lastmodifieddate: "2023-05-26 07:53:36",
    options: [
      {
        name: "View Ruleset",
        link: "",
      },
      {
        name: "View change log",
        link: "",
      },
    ],
    rules: [],
    dictionaries: [],
  },
  {
    id: 3,
    version: "2.0.1",
    status: "Previously Deployed",
    name: "APPLY-CREDIT-CARD",
    group: "CHAMPION",
    lastmodifiedby: "Sagarika Matey",
    lastmodifieddate: "2023-01-10 08:56:36",
    options: [
      {
        name: "View Ruleset",
        link: "",
      },
      {
        name: "View change log",
        link: "",
      },
    ],
    rules: [],
    dictionaries: [],
  },
  {
    id: 4,
    version: "2.0.1",
    status: "Previously Deployed",
    name: "APPLY-CREDIT-CARD",
    group: "CHAMPION",
    lastmodifiedby: "Sagarika Matey",
    lastmodifieddate: "2023-01-10 08:56:36",
    options: [
      {
        name: "View Ruleset",
        link: "",
      },
      {
        name: "View change log",
        link: "",
      },
    ],
    rules: [],
    dictionaries: [],
  },
];

function DataState({ children }) {
  const [rulesets, setRulesets] = useState(demo_rulesets);

  const [activeRuleIndex, setActiveRuleIndex] = useState(null);

  const getRules = async () => {};
  const addRule = async (rulesetID, rule) => {
    let t = rulesets;
    let idx = t.findIndex((item) => item.id == rulesetID);
    rule.rule_id = t[idx].rules.length + 1;
    t[idx].rules.push(rule);
    setRulesets(t);
  };
  const updateRule = async (rulesetID, rule) => {
    let t = rulesets;
    let rulesets_idx = t.findIndex((item) => item.id == rulesetID);
    let rule_idx = t[rulesets_idx].rules.findIndex(
      (item) => item.rule_id == rule.rule_id
    );
    t[rulesets_idx].rules[rule_idx] = rule;

    setRulesets(t);
  };

  const addRuleset = async (ruleset) => {
    setRulesets([...rulesets, ruleset]);
  };
  const deleteRule = async () => {};

  // set data
  const [data, setData] = useState(null);
  // get data
  const getData = async (formData) => {
    // console.log(formData);
    await axiosClient
      .post("get-data", formData)
      .then(function (response) {
        const res = response.data;
        setData(res.data);
        // console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <DataContext.Provider
      value={{
        rulesets,
        activeRuleIndex,
        setActiveRuleIndex,
        addRule,
        updateRule,
        addRuleset,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataState;

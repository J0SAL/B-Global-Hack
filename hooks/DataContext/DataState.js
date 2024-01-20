import { useEffect, useState } from "react";
import axiosClient from "./../../services/axios-client";
import DataContext from "./dataContext";

function DataState({ children }) {
  const [activeRuleIndex, setActiveRuleIndex] = useState(null);
  const [rules, setRules] = useState([]);
  const [editRuleData, setEditRuleData] = useState("");

  const [data, setData] = useState(null);
  // day footfall prediction
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
        rules,
        activeRuleIndex,
        editRuleData,
        setEditRuleData,
        setActiveRuleIndex,
        setRules,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataState;

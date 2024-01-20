import React from "react";
import AddRule from "./AddRule";
import EditRule from "./EditRule";

function Rules() {
  return (
    <div>
      <div className="row">
        <div className="col-3">
          <AddRule />
        </div>
        <div className="col-9">
          <EditRule />
        </div>
      </div>
    </div>
  );
}

export default Rules;

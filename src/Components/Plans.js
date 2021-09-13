import React from "react";
import Plan from "./Plan";

function Plans(props) {
  const planList = props.plans;

  let component = planList.map((item) => {
    return (
      <div className="col">
        <Plan data={item}></Plan>
      </div>
    );
  });

  return (
    <div className="container mt-3">
      <div className="row">{component}</div>
    </div>
  );
}

export default Plans;

import React from "react";

function Plan(props) {
  return (
    <div class="card" style={{ width: 18 + "rem" }}>
      <img src={props.data.imageUrl} class="card-img-top" alt="..." />
      <div class="card-body">
        <p class="card-text">{props.data.description}</p>
      </div>
    </div>
  );
}

export default Plan;

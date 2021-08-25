import React from "react";

function MenuItem({ image, name, price }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h2> {name} </h2>
    </div>
  );
}

export default MenuItem;

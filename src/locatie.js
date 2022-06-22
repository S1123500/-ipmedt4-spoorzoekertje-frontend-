import React from "react";

export const Locatie = ({ locatie }) => {
  return (
    <>
      <div>{locatie.coordinates}</div>
      <div>{locatie.id}</div>
    </>
  );
};


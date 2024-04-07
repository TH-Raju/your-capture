import React from "react";

const Thanks = ({ data }: { data: boolean }) => {
  return data && <div>Thanks</div>;
};

export default Thanks;

import React from "react";
import { RenderWhen } from "src/components";

const ModalDemo = () => {
  return (
    <div>
      <RenderWhen when={true}>11</RenderWhen>
    </div>
  );
};
export default ModalDemo;

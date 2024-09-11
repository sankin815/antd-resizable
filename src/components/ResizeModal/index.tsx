import { CSSProperties } from "react";
import { DraggableElement } from "src/components";

type ResizeModalProps = {
  /**
   * - resize的模式，分为两种
   *    1. CENTRAL_SYMMETRY - 中心对称，即对称元素做相反的调整
   *    2. A_SYMMETRY - 非中心对称，只有拖拽元素做对应调整
   */
  mode?: "CENTRAL_SYMMETRY" | "EXTENSION";
} & Partial<Record<"edgeStyle" | "angleStyle", CSSProperties>>;

const ResizeModal = ({
  edgeStyle,
  angleStyle,
  mode = "CENTRAL_SYMMETRY",
}: ResizeModalProps) => {
  return (
    <div>
      <DraggableElement
        direction="HORIZONTAL"
        style={{
          width: 1,
          height: 100,
          border: "1px solid #ccc",
        }}
        onDrag={(e, data) => {
          console.log(e, data);
        }}
      />
    </div>
  );
};
export default ResizeModal;

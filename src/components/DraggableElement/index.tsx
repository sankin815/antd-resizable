import { CSSProperties, useState } from "react";
import Draggable, { DraggableProps } from "react-draggable";

/**
 * VERTICAL - 垂直方向
 * HORIZONTAL - 水平方向
 * LT_RB - 左上到右下
 * LB_RT - 左下到右上
 */
type DirectionType = "VERTICAL" | "HORIZONTAL" | "LT_RB" | "LB_RT";

export type DraggableElementProps = {
  disabled?: boolean;
  /**
   * 生成的拖拽元素的拖拽方向
   * - VERTICAL - 垂直方向
   * - HORIZONTAL - 水平方向
   * - LT_RB - 左上到右下
   * - LB_RT - 左下到右上
   */
  direction: DirectionType;
  style?: CSSProperties;
  detectionRange?: CSSProperties["height"];
} & Pick<DraggableProps, "onDrag">;

const DraggableElement = ({
  direction,
  disabled,
  onDrag,
  style,
}: DraggableElementProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const updateXPosition = (x: number) => {
    setPosition({ x, y: position.y });
  };
  const updateYPosition = (y: number) => {
    setPosition({ x: position.x, y });
  };
  const updatePosition = (pos: { x: number; y: number }) => {
    setPosition(pos);
  };
  // if (disabled) {
  //   return <></>;
  // }

  const ElementMap: Record<
    DirectionType,
    Pick<DraggableProps, "axis"> & Pick<CSSProperties, "cursor">
  > = {
    VERTICAL: {
      axis: "y",
      cursor: "ns-resize",
    },
    HORIZONTAL: {
      axis: "x",
      cursor: "ew-resize",
    },
    LT_RB: {
      axis: "both",
      cursor: "nwse-resize",
    },
    LB_RT: {
      axis: "both",
      cursor: "nesw-resize",
    },
  };

  return (
    <Draggable
      axis={ElementMap[direction].axis}
      onDrag={(e, data) => {
        switch (direction) {
          case "VERTICAL":
            // updateYPosition(data.y);
            break;
          case "HORIZONTAL":
            // updateXPosition(data.x);
            break;
          case "LB_RT":
          case "LT_RB":
            // updatePosition(data);
            break;
          default:
            const useless: never = direction;
            console.warn(useless);
            break;
        }

        onDrag(e, data);
      }}
      position={position}
    >
      <div
        style={{
          zIndex: 1,
          pointerEvents: "auto",
          position: "absolute",
          backgroundColor: "pink",
          cursor: ElementMap[direction].cursor,
          ...style,
        }}
      />
    </Draggable>
  );
};
export default DraggableElement;

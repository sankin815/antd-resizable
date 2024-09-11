/*
 * @Description: RenderWhen根据when条件渲染不同内容，该组件可以替换多层?:提升代码可读性
 */
import React, { ReactNode, ReactElement, cloneElement } from "react";

type When<T> = T extends Record<string, any> | undefined | null
  ? NonNullable<T>
  : T;

/** RenderWhen组件自己的Props的key */
type OwnPropsKeys = "when" | "children" | "placeholder";

export const RenderWhen = function <T, K>({
  when,
  children,
  placeholder = <></>,
  ...rest
}: {
  when?: T;
  children:
    | ReactNode
    | ((val: When<T>, restProps: Omit<K, OwnPropsKeys>) => ReactNode);
  placeholder?: ReactNode;
} & {
  [P in keyof K]: K[P];
}) {
  if (!Boolean(when)) {
    return (placeholder ?? null) as JSX.Element;
  }

  if (typeof children === "function") {
    return children(when as When<T>, rest) as JSX.Element;
  }

  if (React.isValidElement(children)) {
    return cloneElement(children as ReactElement, rest);
  }

  return children as unknown as JSX.Element;
};

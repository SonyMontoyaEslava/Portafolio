import { classNames } from "../lib/classNames";

export default function Container({ as: Component = "div", className = "", children }) {
  return (
    <Component className={classNames("mx-auto w-full max-w-[1120px] px-5 sm:px-8", className)}>
      {children}
    </Component>
  );
}

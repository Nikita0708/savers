import type { FC } from "react";

import cn from "@/helpers/cn";

interface IconProps {
  className?: string;
  width?: string;
  height?: string;
  color?: string;
  path: string;
}

const Icon: FC<IconProps> = ({
  className,
  width = "20px",
  height = "21px",
  color = "#FFFFFF",
  path,
}) => {
  return (
    <div
      className={`${cn(
        `icon`,
        color.charAt(0) !== "#" ? color : ""
      )} ${className}`}
      style={{
        maskImage: `url("${path}")`,
        backgroundColor: color.charAt(0) === "#" ? color : "",
        width,
        height,
      }}
    ></div>
  );
};

export default Icon;

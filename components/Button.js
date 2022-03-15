import cc from "classcat";

import { useThemeState } from "../context/theme";

const buttonStyle = (theme) => {
  switch (theme) {
    case "kitchen-sink-journal-chopchop-shop":
      return "bg-clementine text-black";
    case "walnut-cooks-tools-chopchop-shop":
      return "bg-tumbleweed text-black";
    case "essential-knife-set-chopchop-shop":
      return "bg-hawkes-blue text-black";
    case "private-cooking-class-chopchop-shop":
      return "bg-asparagus text-black";
    case "ceramic-dutch-oven-chopchop-shop":
      return "bg-goldenrod text-black";
    default:
      return "bg-white-rock";
  }
};

function Button({ className, ...props }) {
  const theme = useThemeState();

  const buttonClass = cc([
    "inline-flex items-center h-10 px-5 transition-colors duration-150 rounded-lg focus:shadow-outline hover:bg-amber-500 hover:bg-tumbleweed",
    buttonStyle(theme),
    className,
  ]);

  if (props.href) return <a {...props} className={buttonClass} />;

  return <button {...props} className={buttonClass} />;
}

export default Button;

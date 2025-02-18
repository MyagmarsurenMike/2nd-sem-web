import { FC } from "react";
import { ArrowNarrowDown, ArrowNarrowUp } from "untitledui-js-base";

interface Props {
  value?: React.ReactNode | string | number;
  color?:
    | "gray"
    | "green"
    | "red"
    | "yellow"
    | "blue"
    | "indigo"
    | "purple"
    | "pink"
    | string;
}

const BloodPressure: FC<Props> = ({ color = "gray", value = 0 }) => {
  let titleColorClass = "bg-gray-100 text-gray-700";
  let title = <ArrowNarrowUp className="w-4 h-4" />;

  switch (color) {
    case "purple":
      titleColorClass = "bg-[#C7D2EE] text-[#354AB5]";
      break;
    case "blue":
      title = <ArrowNarrowDown className="w-4 h-4" />;
      titleColorClass = "bg-[#C5E9EE] text-[#0E7090]";
      break;
    default:
      titleColorClass = "bg-white text-gray-700";
      break;
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium truncate ${titleColorClass} `}
    >
      {title}
      <span className="text-black">{value || 0}</span>
    </span>
  );
};

export default BloodPressure;

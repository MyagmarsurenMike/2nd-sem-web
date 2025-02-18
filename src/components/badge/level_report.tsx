import { FC } from "react";

interface Props {
  status: string;
  OneNone?: boolean;
}

const LevelReport: FC<Props> = ({ status, OneNone }) => {
  let text = "None";
  let colorClass = "bg-[#F2F4F7] text-[#344054]";
  switch (status) {
    case "level1":
      text = "Level 1";
      colorClass = "bg-[#ECFDF3] text-[#027A48]";
      break;
    case "level2":
      text = "Level 2";
      colorClass = "bg-[#FFFAEB] text-[#B54708]";
      break;
    case "level3":
      text = "Level 3";
      colorClass = "bg-[#FEF3F2] text-[#B42318]";
      break;
    default:
      colorClass = "bg-[#F2F4F7] text-[#344054]";
      break;
  }
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium truncate ${
        OneNone ? "bg-[#F2F4F7] text-[#344054]" : colorClass
      }`}
    >
      {text}
    </span>
  );
};

export default LevelReport;

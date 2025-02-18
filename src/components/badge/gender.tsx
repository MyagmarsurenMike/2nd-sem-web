import ManImg from "assets/icons/man.svg";
import WomanImg from "assets/icons/woman.svg";

interface GenderBadgeProps {
  status: string;
  percent: number | string;
}

export const GenderBadge: React.FC<GenderBadgeProps> = ({
  status,
  percent,
}) => {
  let text = "";
  let color = "";
  let img;
  switch (status) {
    case "male":
      text = percent + "%";
      color = "bg-[#ECFDF3] text-[#027A48]";
      img = <img src={ManImg} />;
      break;
    default:
      text = percent + "%";
      color = "bg-[#FFF1F3] text-[#C01048]";
      img = <img src={WomanImg} />;
      break;
  }
  return (
    <span
      className={`inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-xs font-medium truncate ${color}`}
    >
      <div>{img}</div>
      <div>{text}</div>
    </span>
  );
};

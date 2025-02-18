import { Eye, EyeOff } from "untitledui-js-base";

interface MaskedValueProps {
  value: string;
  isVisible: boolean;
  onToggle: () => void;
}

const MaskedValue: React.FC<MaskedValueProps> = ({
  value,
  isVisible,
  onToggle,
}) => {
  const maskedValue = isVisible
    ? value
    : `${value.slice(0, 1)}${"*".repeat(value.length - 4)}${value.slice(-2)}`;

  return (
    <div className="flex gap-2 justify-center items-center">
      <p className="uppercase flex">{maskedValue}</p>
      {isVisible ? (
        <Eye onClick={onToggle} size="20" />
      ) : (
        <EyeOff onClick={onToggle} size="20" />
      )}
    </div>
  );
};

export default MaskedValue;

import { Card, Progress, Tooltip } from "antd";
export type CardProps = {
  label: string;
  description: string;
  amount?: number;
  percent?: number;
  isMoney?: boolean;
  loading?: boolean;
  customItem?: React.ReactNode;
};
const DashboardAccessCard = ({
  label,
  amount,
  loading = false,
  description,
}: CardProps) => {
  return (
    <Card
      headStyle={{
        display: "none",
      }}
      className="w-full border border-gray-200"
      loading={loading}
    >
      <div className="flex flex-col gap-12">
        <span className="text-gray-900 text-base font-semibold mb-1">
          {description}
        </span>
        <div className="flex flex-row  justify-between">
          <div className="flex flex-col">
            <span className="text-[#475467] text-sm font-normal">{label}</span>
            <span className="text-[#A0B6BA] text-2xl font-bold">{amount}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[#475467] text-sm font-normal">Орон тоо</span>
            <span>
              <span className="text-[#0077F4] text-2xl font-bold">46</span> /
              <span className="text-[#475467] text-sm font-normal">50</span>
            </span>
          </div>
        </div>
      </div>
      <Tooltip>
        <Progress
          percent={60}
          success={{ percent: 30, strokeColor: "#0077F4" }}
          strokeColor={"#A0B6BA"}
          strokeWidth={20}
          type="line"
          showInfo={false}
          strokeLinecap="butt"
          // trailColor={"#E5E5E5"}
        />
      </Tooltip>
    </Card>
  );
};

export default DashboardAccessCard;

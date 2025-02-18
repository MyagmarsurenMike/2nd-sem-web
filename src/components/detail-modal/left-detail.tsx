import { Avatar, Card, Collapse } from "antd";
import React from "react";
import file from "service/file";

interface LeftDetailProps {
  items: any;
  last_name?: string;
  first_name?: string;
  url?: string;
}
const LeftDetail: React.FC<LeftDetailProps> = ({
  items,
  last_name,
  first_name,
  url,
}) => {
  const color = "#146135";
  return (
    <Card className="min-h-screen">
      <div className="flex justify-center flex-col items-center">
        <Avatar
          shape="circle"
          style={{ backgroundColor: color }}
          size={80}
          src={file.fileToUrl(url || "")}
        >
          {first_name?.substring(0, 2).toUpperCase()}
        </Avatar>
        <div className="text-xl text-[#667085] font-medium">{last_name}</div>
        <div className="text-2xl font-medium pr-2">{first_name}</div>
        <div className="h-px bg-[#EAECF0] mb-2 mt-2 w-full"></div>
      </div>
      <Collapse
        defaultActiveKey={["1"]}
        ghost
        items={items}
        expandIconPosition="end"
      />
    </Card>
  );
};

export default LeftDetail;

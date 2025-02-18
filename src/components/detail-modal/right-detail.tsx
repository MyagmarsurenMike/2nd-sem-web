import { Card, Tabs } from "antd";
import React from "react";

const RightDetail: React.FC<any> = ({ items }) => {
  const onChange = (key: String) => {};
  return (
    <Card className="min-h-full overflow-y-visible">
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </Card>
  );
};

export default RightDetail;

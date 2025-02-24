import { ProFormRadio } from "@ant-design/pro-form";
import { IfCondition } from "components/condition";
import { FininciarTab, FininciarTabButton } from "config"; 
import { useState } from "react";
import CancelTick from "./pages/CancelTicket";

export const Report: React.FC<any> = ({ data }) => {
  const [tab, setTab] = useState(FininciarTab.CancellingTicket);

  const DocumentButtons: FininciarTabButton[] = [
    {
      value: FininciarTab.CancellingTicket,
      label: "Э/Х тасалбар хүчингүй болгох",
      defaultvalue: true,
    },
  ];

  return (
    <>
      <div className="mt-5">
        <ProFormRadio.Group
          name="documentLine"
          radioType="button"
          fieldProps={{
            size: "large",
            value: tab,
            onChange: (e) => setTab(e.target.value),
          }}
          options={DocumentButtons}
        />
      </div>
      <IfCondition
        condition={tab === FininciarTab.CancellingTicket}
        whenTrue={<CancelTick />}
      />
    </>
  );
};

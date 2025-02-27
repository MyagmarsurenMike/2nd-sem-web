import { ProFormRadio } from "@ant-design/pro-form";
import { IfCondition } from "components/condition";
import { FininciarTab, FininciarTabtButton } from "config";
import { useState } from "react";
import CustomerCompany from "./pages/CustomerCompany";
import AddFeeSet from "./pages/additionalfee";
import CustBalSet from "./pages/CustomerBalance";
import CanTickSet from "./pages/CancelTicket";

export const Refinfo: React.FC<any> = ({ data }) => {
  const [tab, setTab] = useState<any>(FininciarTab.CustomerCompany);

  const DocumentButtons: FininciarTabtButton[] = [
    {
      value: FininciarTab.CustomerCompany,
      label: "Харилцагч компани",
    },
    {
      value: FininciarTab.AdditionalFeeSettings,
      label: "Нэмэлт хураамж тохиргоо",
    },
    {
        value: FininciarTab.CustomerAccountSettlement,
        label: "Харилцагч дансны тооцоо",
    },
    {
        value: FininciarTab.CancellingTicket,
        label: "Э/Х тасалбар хүчингүй болгох",
    },
  ];

  return (
    <>
      <div className="mt-5">
        <ProFormRadio.Group
          name={"documentLine"}
          radioType="button"
          fieldProps={{
            size: "large",
            value: tab,
            onChange: (e) => {
              setTab(e.target.value);
            },
          }}
          options={DocumentButtons?.map((el) => ({
            ...el,
            onChange: (e) => {
              setTab(e);
            },
          }))}
          initialValue={FininciarTab.CustomerCompany}
        />
        </div>
        <IfCondition
            condition={tab === FininciarTab.CustomerCompany}
            whenTrue={<CustomerCompany />}
        /> 
        <IfCondition
            condition={tab === FininciarTab.AdditionalFeeSettings}
            whenTrue={<AddFeeSet />}
        /> 
        <IfCondition
            condition={tab === FininciarTab.CustomerAccountSettlement}
            whenTrue={<CustBalSet />}
        />
        <IfCondition
            condition={tab === FininciarTab.CancellingTicket}
            whenTrue={<CanTickSet />}
        />
    </>
  );
};

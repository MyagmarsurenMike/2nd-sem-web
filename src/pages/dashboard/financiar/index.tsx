import { ProFormRadio } from "@ant-design/pro-form";
import { IfCondition } from "components/condition";
import { FininciarTab, FininciarTabtButton } from "config";
import { useState } from "react";
import CustomerCompany from "./pages/CustomerCompany";
import ForeignCustomer from "./pages/ForeignCustomer";

export const Fininciar: React.FC<any> = ({ data }) => {
  const [tab, setTab] = useState<any>(FininciarTab.CustomerCompany);

  const DocumentButtons: FininciarTabtButton[] = [
    {
      value: FininciarTab.CustomerCompany,
      label: "Харилцагч компани",
    },
    {
      value: FininciarTab.ForeignCustomer,
      label: "Гадаад тээвэр зууч",
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
        condition={tab === FininciarTab.ForeignCustomer}
        whenTrue={<ForeignCustomer />}
      />
    </>
  );
};

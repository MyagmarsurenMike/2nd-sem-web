import { useDebounceFn, useRequest } from "ahooks";
import { notification, Switch } from "antd";
import { PageCard } from "components/card";
import { IfCondition, ITable } from "components/index";
import { Label } from "components/label";
import InitTableHeader from "components/table-header";
import { useEffect, useState } from "react";
import customerCompany from "service/fininaciar/customerCompany";
import { CustomerCompanyType } from "service/fininaciar/customerCompany/type";
import { initPagination } from "utils/index";
import { CreateService } from "./actions/create";
import { UpdateService } from "./actions/update";
import { ProFormDateWeekRangePicker, ProFormRadio } from "@ant-design/pro-form/es/components";
import { ViewService } from "./actions/view";
import { DeleteService } from "./actions/delete";
import { FininciarTab, FininciarTabtButton, CustomerAccountSettlementTab, CustomerAccountSettlementTabtButton } from "config";
import { refinfo_customercomp_data1_bal, refinfo_customercomp_data2_bal } from "globaldatas";
import { Data } from "untitledui-js-base";


const CustBalSet = () => {
  const [filter, setFilter] = useState(initPagination);
  const [create, setCreate] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const list = useRequest(customerCompany.list, {
    // manual: true,
    // onError: (err) =>
    //   notification.error({
    //     message: err.message,
    //   }),
  });

  const run = () => {
    list.run({
      ...filter,
      search: search,
    });
  };

  useEffect(() => {
    run();
  }, [filter]);

  const searchRun = useDebounceFn(list.run, { wait: 1000 });


  const [tab, setTab] = useState<any>(CustomerAccountSettlementTab.transaction);
  
    const DocumentButtons: CustomerAccountSettlementTabtButton[] = [
      {
      value: CustomerAccountSettlementTab.ledger,
      label: "данс",
      },
      {
      value: CustomerAccountSettlementTab.transaction,
      label: "Гүйлгээ",
      },
    ];

    // if(tab === CustomerAccountSettlementTab.ledger){
    //   const dataSource = refinfo_customercomp_data1_bal;
    // }else{
    //   const dataSource = refinfo_customercomp_data2_bal;
    // }  
    // <IfCondition 
    //   condition={tab === CustomerAccountSettlementTab.ledger}
    //   const dataSource = refinfo_customercomp_data1_bal;
    // >

  return (
    <PageCard xR>
      <div className="px-2 pb-0">
        <div className="px-4">
          <ProFormRadio.Group
            className="px-4"
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
          />
        </div>
        <InitTableHeader
          hideDownload = {true}
          addButtonName="Нэмэх"
          customHeaderTitle={ <ProFormDateWeekRangePicker />}
          searchPlaceHolder="Нэр, данс"
          fileName="Харилцагч компанийн жагсаалт"
          setCreate={setCreate}
          search={search}
          setSearch={(e) => {
            setSearch(e);
            searchRun.run({ ...filter, search: e });
          }}
          refresh={() => list.run({ ...filter, search: search })}
        />
      </div>
      <IfCondition
        condition={tab === CustomerAccountSettlementTab.ledger}
        whenTrue={
          <ITable<CustomerCompanyType>
            total={list.data?.total}
            loading={list.loading}
            dataSource={refinfo_customercomp_data1_bal}
            refresh={(values) => list.run({ ...filter, ...values })}
            UpdateComponent={UpdateService}
            DetailComponent={ViewService}
            RemoveComponent={DeleteService}
            form={filter}
            setForm={setFilter}
            columns={[
              {
                dataIndex: "shortcut_name",
                title: "Товчлол",
                align: "left",
                render: (value) => (
                  <div className="flex gap-2">
                    <span className="text-sm text-[#475467] font-normal">
                      {value || "-"}
                    </span>
                  </div>
                ),
              },
              {
                dataIndex: "name",
                title: "Компаний нэр",
                align: "left",
                render: (value) => (
                  <span className="text-sm text-[#475467] font-normal flex text-center">
                    {value || "-"}
                  </span>
                ),
              },
              {
                dataIndex: "is_broker",
                title: "Зууч эсэх",
                width: "200",
                render: (value) => (
                  <span className="text-sm text-[#475467] font-normal flex text-center ">
                    {<Switch disabled checked={!!value} />}
                  </span>
                ),
              },
              {
                dataIndex: "ledger_name",
                title: "Харилцагчийн код",
                width: "200",
                render: (_, record) => (
                  <span className="text-sm text-[#475467] font-normal flex text-center">
                    {record?.ledger?.name || "-"}
                  </span>
                ),
              },
              {
                dataIndex: "contact_number",
                title: "Харилцах дугаар",
                align: "center",
                render: (value) => (
                  <span className="text-sm text-[#475467] font-normal">
                    {value || "-"}
                  </span>
                ),
              },
              {
                dataIndex: "email",
                title: "Цахим хаяг",
                align: "left",
                width: "10%",
                render: (_, record) => (
                  <span className="text-sm text-[#475467] font-normal flex text-center ">
                    {record?.user?.email || "-"}
                  </span>
                ),
              },
              {
                dataIndex: "created_by",
                title: "Бүртгэсэн ажилтан",
                align: "left",
                width: "10%",
                render: (_, record) => (
                  <span className="text-sm text-[#475467] font-normal flex text-center ">
                    {record?.created_by?.email || "-"}
                  </span>
                ),
              },
            ]}
            CreateComponent={CreateService}
            create={create as boolean}
            setCreate={setCreate}
          />
        } 
      />
      <IfCondition
        condition={tab === CustomerAccountSettlementTab.transaction}
        whenTrue={
          <ITable<CustomerCompanyType>
            total={list.data?.total}
            loading={list.loading}
            dataSource={refinfo_customercomp_data2_bal}
            refresh={(values) => list.run({ ...filter, ...values })}
            UpdateComponent={UpdateService}
            DetailComponent={ViewService}
            RemoveComponent={DeleteService}
            form={filter}
            setForm={setFilter}
            columns={[
              {
                dataIndex: "shortcut_name",
                title: "Товчлол",
                align: "left",
                render: (value) => (
                  <div className="flex gap-2">
                    <span className="text-sm text-[#475467] font-normal">
                      {value || "-"}
                    </span>
                  </div>
                ),
              },
              {
                dataIndex: "name",
                title: "Компаний нэр",
                align: "left",
                render: (value) => (
                  <span className="text-sm text-[#475467] font-normal flex text-center">
                    {value || "-"}
                  </span>
                ),
              },
              {
                dataIndex: "is_broker",
                title: "Зууч эсэх",
                width: "200",
                render: (value) => (
                  <span className="text-sm text-[#475467] font-normal flex text-center ">
                    {<Switch disabled checked={!!value} />}
                  </span>
                ),
              },
              {
                dataIndex: "ledger_name",
                title: "Харилцагчийн код",
                width: "200",
                render: (_, record) => (
                  <span className="text-sm text-[#475467] font-normal flex text-center">
                    {record?.ledger?.name || "-"}
                  </span>
                ),
              },
              {
                dataIndex: "contact_number",
                title: "Харилцах дугаар",
                align: "center",
                render: (value) => (
                  <span className="text-sm text-[#475467] font-normal">
                    {value || "-"}
                  </span>
                ),
              },
              {
                dataIndex: "email",
                title: "Цахим хаяг",
                align: "left",
                width: "10%",
                render: (_, record) => (
                  <span className="text-sm text-[#475467] font-normal flex text-center ">
                    {record?.user?.email || "-"}
                  </span>
                ),
              },
              {
                dataIndex: "created_by",
                title: "Бүртгэсэн ажилтан",
                align: "left",
                width: "10%",
                render: (_, record) => (
                  <span className="text-sm text-[#475467] font-normal flex text-center ">
                    {record?.created_by?.email || "-"}
                  </span>
                ),
              },
            ]}
            CreateComponent={CreateService}
            create={create as boolean}
            setCreate={setCreate}
          />
        }
      /> 
    </PageCard>
  );
};

export default CustBalSet;

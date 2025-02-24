import { useDebounceFn, useRequest } from "ahooks";
import { notification, Switch } from "antd";
import { PageCard } from "components/card";
import { ITable } from "components/index";
import { Label } from "components/label";
import InitTableHeader from "components/table-header";
import { useEffect, useState } from "react";
import customerCompany from "service/fininaciar/customerCompany";
import { CustomerCompanyType } from "service/fininaciar/customerCompany/type";
import { initPagination } from "utils/index";
import { CreateService } from "./actions/create";
import { UpdateService } from "./actions/update";
import { ProFormDateWeekRangePicker } from "@ant-design/pro-form/es/components";

const AddFeeSet = () => {
  const [filter, setFilter] = useState(initPagination);
  const [create, setCreate] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const list = useRequest(customerCompany.list, {
    manual: true,
    onError: (err) =>
      notification.error({
        message: err.message,
      }),
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

  const data = [
    {
      id: "1",
      type: "001",
      fee_code: "A123",
      fee_name: false,
      fee_type: "Fixed",
      fee_number: "500",
      ledger: { name: "USD" },
    },
    {
      id: "2",
      type: "002",
      fee_code: "B456",
      fee_name: "Subscription Fee",
      fee_type: "Monthly",
      fee_number: "1000",
      ledger: { name: "MNT" },
    },
    {
      id: "3",
      type: "003",
      fee_code: "C789",
      fee_name: false,
      fee_type: "Percentage",
      fee_number: "5",
      ledger: { name: "USD" },
    },
    {
      id: "4",
      type: "004",
      fee_code: "D012",
      fee_name: "Processing Fee",
      fee_type: "Fixed",
      fee_number: "300",
      ledger: { name: "MNT" },
    },
    {
      id: "5",
      type: "005",
      fee_code: "E345",
      fee_name: false,
      fee_type: "Percentage",
      fee_number: "10",
      ledger: { name: "USD" },
    },
  ];
  

  const searchRun = useDebounceFn(list.run, { wait: 1000 });

  return (
    <PageCard xR>
      <div className="px-2 pb-0">
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

      <ITable<CustomerCompanyType>
        
        total={list.data?.total}
        loading={list.loading}
        dataSource={data}
        refresh={(values) => list.run({ ...filter, ...values })}
        // UpdateComponent={UpdateService}
        form={filter}
        setForm={setFilter}
        columns={[
          {
            dataIndex: "type",
            title: "Ангилалийн код",
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
            dataIndex: "fee_code",
            title: "Хураамжийн код",
            align: "left",
            render: (value) => (
              <span className="text-sm text-[#475467] font-normal flex text-center">
                {value || "-"}
              </span>
            ),
          },
          {
            dataIndex: "fee_name",
            title: "Хураамжийн нэр",
            width: "200",
            render: (value) => (
              <span className="text-sm text-[#475467] font-normal flex text-center ">
                {<Switch disabled checked={!!value} />}
              </span>
            ),
          },
          {
            dataIndex: "fee_type",
            title: "Хэмжих нэгж",
            width: "200",
            render: (_, record) => (
              <span className="text-sm text-[#475467] font-normal flex text-center">
                {record?.ledger?.name || "-"}
              </span>
            ),
          },
          {
            dataIndex: "fee_number",
            title: "Хураамжийн дүн",
            align: "center",
            render: (value) => (
              <span className="text-sm text-[#475467] font-normal">
                {value || "-"}
              </span>
            ),
          },
        ]}
        CreateComponent={CreateService}
        create={create as boolean}
        setCreate={setCreate}
        // RemoveModelConfig={{
        //   action: customerCompany.deleteA,
        //   config: (record) => ({
        //     uniqueKey: record?.id,
        //     display: record?.name,
        //     title: "Remove",
        //   }),
        // }}
      />
    </PageCard>
  );
};

export default AddFeeSet;

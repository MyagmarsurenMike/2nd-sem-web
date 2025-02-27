import { useDebounceFn, useRequest } from "ahooks";
import { notification, Switch } from "antd";
import { PageCard } from "components/card";
import { DeleteButton, ITable } from "components/index";
import InitTableHeader from "components/table-header";
import { useEffect, useState } from "react";
import customerCompany from "service/fininaciar/customerCompany";
import { CustomerCompanyType } from "service/fininaciar/customerCompany/type";
import { initPagination } from "utils/index";
import { CreateService } from "./actions/create";
import { UpdateService } from "./actions/update";
import { ProFormDateWeekRangePicker } from "@ant-design/pro-form/es/components";
import { refinfo_additionalfeeset_data } from "globaldatas";
import { ViewService } from "./actions/view";
import DateWeekRangePicker from "@ant-design/pro-form/es/components/DateWeekRangePicker";
import { DeleteService } from "./actions/delete";

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


  const searchRun = useDebounceFn(list.run, { wait: 1000 });

  return (
    <PageCard xR>
      <div className="px-2 pb-0">
        <InitTableHeader
          hideDownload={true}
          addButtonName="Нэмэх"
          customHeaderTitle={
        <div className="flex items-center text-center gap-4">
          <h3 className="my-4">Нийт (<span>{refinfo_additionalfeeset_data.length}</span>)</h3>
          <ProFormDateWeekRangePicker />
        </div>
          }
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
        dataSource={refinfo_additionalfeeset_data}
        refresh={(values) => list.run({ ...filter, ...values })}
        UpdateComponent={UpdateService}
        DetailComponent={ViewService}
        RemoveComponent={DeleteService}
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

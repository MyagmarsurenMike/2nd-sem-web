import { useDebounceFn, useRequest } from "ahooks";
import { Button, notification, Space } from "antd";
import { PageCard } from "components/card";
import { ITable } from "components/index";
import { Label } from "components/label";
import InitTableHeader from "components/table-header";
import { useEffect, useState } from "react";
import { CustomerCompanyType } from "service/fininaciar/customerCompany/type";
import foreign from "service/fininaciar/foreign";
import { initPagination } from "utils/index";
import { CreateService } from "./actions/create";
import { UpdateService } from "./actions/update";
import { EyeOutlined } from "@ant-design/icons";
import { ProFormDateWeekRangePicker } from "@ant-design/pro-form";

const LeftOv = () => {
  const [filter, setFilter] = useState(initPagination);
  const [create, setCreate] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const list = useRequest(foreign.list, {
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
      <div className="px-2 pb-0 items-center">
        <InitTableHeader
            hideDownload = {true}
            addButtonName="Нэмэх"
            customHeaderTitle={ <ProFormDateWeekRangePicker />}
            searchPlaceHolder="Нэр , код"
            fileName="Гадаад тээвэр зууч"
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
        dataSource={list?.data?.items ?? []}
        refresh={(values) => list.run({ ...filter, ...values })}
        UpdateComponent={UpdateService}
        form={filter}
        setForm={setFilter}
        columns={[
            {
                title: "Дөхөлт огноо",
                width: 1800,
                children: [
                    { title: "Дөхөлт огноо",dataIndex: "arrivalDate",},
                    { title: "Орох хил", dataIndex: "arrivalBorder" },
                    { title: "Ирэх/Явах", dataIndex: "import" },
                    { title: "Чингэлэг дугаар", dataIndex: "containerNumber" },
                    { title: "Даац", dataIndex: "capacity" },
                    { title: "Зуучийн нэр", dataIndex: "brokerName" },
                    { title: "Хоосон/Аяаатай", dataIndex: "load" },
                    { title: "Зарах эсэх", dataIndex: "sell" },
                    { title: "Зарах үнэ", dataIndex: "price" },
                ],
            },
            {
                title: "Талбайн бүртгэл",
                children: [
                    { title: "Зууч код", dataIndex: "brokerCode" },
                    { title: "Байр №", dataIndex: "blockNumber" },
                    { title: "Талбайд задарсан", dataIndex: "unloadedSite" },
                    { title: "Талбайд ирсэн", dataIndex: "arrivedSite" },
                    { title: "Задарсан", dataIndex: "unloaded" },
                    { title: "Суларсан", dataIndex: "released" },
                    { title: "Ачилт хийсэн", dataIndex: "loaded" },
                ],
            },
            {
                title: "Үйлдэл",
                key: "operation",
                fixed: "right",
                width: 50,
                align: "center",
                render: () => (
                    <Space>
                        <Button 
                            icon={<EyeOutlined rev={undefined} />} 
                            onClick={() => {}}
                            className="border-none"
                        />
                    </Space>
                ),
            },
            
        //   {
        //     dataIndex: "name",
        //     title: "Компаний нэр",
        //     align: "left",
        //     render: (value) => (
        //       <span className="text-sm text-[#475467] font-normal flex text-center">
        //         {value || "-"}
        //       </span>
        //     ),
        //   },
        //   {
        //     dataIndex: "code",
        //     title: "Харилцагчийн код",
        //     width: "200",
        //     render: (value) => (
        //       <span className="text-sm text-[#475467] font-normal flex text-center">
        //         {value || "-"}
        //       </span>
        //     ),
        //   },
        //   {
        //     dataIndex: "created_by",
        //     title: "Бүртгэсэн ажилтан",
        //     align: "left",
        //     width: "10%",
        //     render: (_, record) => (
        //       <span className="text-sm text-[#475467] font-normal flex text-center ">
        //         {record?.created_by?.email || "-"}
        //       </span>
        //     ),
        //   },
        ]}
        CreateComponent={CreateService}
        create={create as boolean}
        setCreate={setCreate}
        // RemoveModelConfig={{
        //   action: LeftOv.deleteA,
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

export default LeftOv;

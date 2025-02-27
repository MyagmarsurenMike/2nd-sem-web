import { useDebounceFn, useRequest } from "ahooks";
import { notification } from "antd";
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
import { ProFormDateWeekRangePicker } from "@ant-design/pro-form/es/components";
import { reportData } from "globaldatas";

const CancelTick = () => {
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
      <div className="px-2 pb-0">
        <InitTableHeader
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
        dataSource={reportData}
        refresh={(values) => list.run({ ...filter, ...values })}
        UpdateComponent={UpdateService}
        form={filter}
        setForm={setFilter}
        columns={[
          {
            title: 'Төлөв',
            key: 'abbreviation',  // Unique key
            width: 200,  // Set width for this column
          },
          {
            title: 'Төрөл',
            key: 'companyName',  // Unique key
            width: 200,  // Set width for this column
          },
          {
            title: 'Баритм дугаар',
            key: 'account',  // Unique key
            width: 200,  // Set width for this column
          },
          {
            title: 'Огноо',
            key: 'broker',  // Unique key
            width: 200,  // Set width for this column
          },
          {
            title: 'Нийт төлсөн',
            key: 'contactNumber',  // Unique key
            width: 200,  // Set width for this column
          },
          {
            title: 'Бэлнээр',
            key: 'broker',  // Unique key
            width: 200,  // Set width for this column
          },
          {
            title: 'Бэлэн бусаар',
            key: 'broker',  // Unique key
            width: 200,  // Set width for this column
          },
          {
            title: 'Нийт төлбөр',
            key: 'broker',  // Unique key
            width: 200,  // Set width for this column
          },
          {
            title: 'Краны хөлс',
            key: 'broker',  // Unique key
            width: 200,  // Set width for this column
          },
          {
            title: 'Зам талбай ашиглалт',
            key: 'broker',  // Unique key
            width: 200,  // Set width for this column
          },
          {
            title: 'Аяаа хадгаламж',
            key: 'broker',  // Unique key
            width: 200,  // Set width for this column
          },
          {
            title: 'Чингэлэг вагон цэвэрлэгээ',
            key: 'broker',  // Unique key
            width: 200,  // Set width for this column
          },
          {
            title: 'Вагон ашиглалт',
            key: 'broker',  // Unique key
            width: 200,  // Set width for this column
          },
          {
            title: 'TL вагон ашиглалт',
            key: 'broker',  // Unique key
            width: 200,  // Set width for this column
          },
          {
            title: 'Гаалийн үзлэг',
            key: 'broker',  // Unique key
            width: 200,  // Set width for this column
          },
          {
            title: 'Авто ачигч',
            key: 'broker',  // Unique key
            width: 200,  // Set width for this column
      
          },
          {
            title: 'Машин оролт',
            key: 'broker',  // Unique key
            width: 200,  // Set width for this column
      
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

export default CancelTick;
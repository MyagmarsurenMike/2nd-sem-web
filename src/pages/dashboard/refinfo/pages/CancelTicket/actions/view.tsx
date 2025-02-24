import { ProFormInstance } from "@ant-design/pro-form";
import { IModalForm } from "components/modal";
import { useEffect, useRef } from "react";
import { ActionComponentProps } from "types";
import { Info } from "./parts/info";

export const ViewService = ({
  onCancel,
  open,
  detail,
}: ActionComponentProps<any>) => {
  const formRef = useRef<ProFormInstance>();

  useEffect(() => {
    if (open && detail) {
      formRef.current?.setFieldsValue({ ...detail });
    }
  }, [open, detail]);

  return (
    <IModalForm
      open={open}
      title="Дэлгэрэнгүй мэдээлэл"
      formRef={formRef}
      cancelText="Хаах"
      width={1000}
      submitter={false} // Hide Save button
      modalProps={{ maskClosable: false, onCancel }}
    >
      <Info actionName="view" />
    </IModalForm>
  );
};

import { IModalForm } from "components/modal";
import { ActionComponentProps } from "types";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Button } from "antd";

export const DeleteService = ({
    onCancel,
    open,
    onDelete,
}: ActionComponentProps<any> & { onDelete: () => void }) => {
    return (
        <IModalForm
            open={open}
            title={
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <div className="bg-red-200 w-8 h-8 rounded-full flex items-center justify-center">
                        <RiDeleteBin6Line size={24} className="text-red-500" />
                    </div>
                </div>
            }
            width={400}
            style={{ height: 250, borderRadius: 12 }}
            submitter={false}
            modalProps={{ maskClosable: false, onCancel }}
        >
            <div className="text-start">
                <h1>Хүчингүй болгох</h1>
                <p>Та уг хүсэлтийг устгахдаа итгэлтэй байна уу?</p>
            </div>
            <div className="flex gap-2">
                <Button className="w-44" onClick={onCancel}>Цуцлах</Button>
                <Button className="w-44" type="primary" danger onClick={onDelete}>
                    Устгах
                </Button>
            </div>
        </IModalForm>
    );
};

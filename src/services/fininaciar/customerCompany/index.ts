import { PaginationResponse, SuccessResponse } from "types";
import http from "../..";
import { CustomerCompanyType } from "./type";

namespace customerCompany {
  export const list = (body: any) =>
    http.post<PaginationResponse<CustomerCompanyType>>(
      "/customer-company/page",
      {
        hasAuth: true,
        body,
      }
    );

  export const create = (body: any) =>
    http.post<SuccessResponse>("/customer-company/create", {
      hasAuth: true,
      body,
    });

  export const deleteA = (id: number) =>
    http.del<SuccessResponse>(`/customer-company/delete/${id}`, {
      hasAuth: true,
    });

  export const update = (body: any, id: number) =>
    http.put<SuccessResponse>(`/customer-company/update/${id}`, {
      hasAuth: true,
      body,
    });
}

export default customerCompany;

import http from "service/index";
import { SuccessResponse } from "types";

namespace profile {
  export const info = (body: any) =>
    http.put<SuccessResponse>("/profile", {
      hasAuth: true,
      body,
    });

  export const editPassword = (id: number, body: any) =>
    http.put<SuccessResponse>(`/user/password_change/${id}`, {
      hasAuth: true,
      body,
    });
}

export default profile;

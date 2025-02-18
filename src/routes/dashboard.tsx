import { AuthContext } from "context/auth";
import { Fininciar } from "pages/dashboard/financiar";
import { useContext } from "react";
import { IRoute } from "./types";

const DashboardRoutes = () => {
  const [user] = useContext(AuthContext);
  let dashboardRoutes: IRoute[] = [];
  // if (user.user?.role_name === UserRoleType.admin) {
  //   dashboardRoutes.push({
  //     key: "employ-registration",
  //     path: "employ-registration",
  //     component: <EmployeRegistration />,
  //   });
  // } else if (user.user?.role_name === UserRoleType.transport_manager) {
  //   dashboardRoutes.push({
  //     key: "field-registration",
  //     path: "field-registration",
  //     component: <FieldRegistration />,
  //   });
  // } else if (user.user?.role_name === UserRoleType.financier) {
  //   dashboardRoutes.push({
  //     key: "financiar",
  //     path: "financiar",
  //     component: <Fininciar />,
  //   });
  // } else if (user.user?.role_name === UserRoleType.cashier) {
  //   dashboardRoutes.push(
  //     {
  //       key: "field-registration",
  //       path: "field-registration",
  //       component: <FieldRegistration />,
  //     },
  //     {
  //       key: "report",
  //       path: "report",
  //       component: <ReportPage />,
  //     },
  //     {
  //       key: "customer-account-settlement",
  //       path: "customer-account-settlement",
  //       component: <CustomerAccountSettlement />,
  //     }
  //   );
  // } else if (user.user?.role_name === UserRoleType.customer) {
  //   dashboardRoutes.push(
  //     {
  //       key: "my-wallet",
  //       path: "my-wallet",
  //       component: <MyWallet />,
  //     },
  //     {
  //       key: "my-fill",
  //       path: "my-fill",
  //       component: <MyFill />,
  //     }
  //   );
  // }
  dashboardRoutes.push({
    key: "financiar",
    path: "financiar",
    component: <Fininciar />,
  });
  return dashboardRoutes;
};

export default DashboardRoutes;

import { Rule } from "antd/lib/form";
import { Week } from "types";

export const deleteConfirm = "delete me";
export const deleteConfirmReg = /^delete me$/g;
export const FieldRequireMessage = "Энэ талбарыг оруулах шаардлагатай!";

export const FORM_ITEM_RULE: (value?: any) => Rule[] = (value?: any) => [
  { message: FieldRequireMessage, required: true, ...value },
];
// Service
export enum GenderType {
  male = "male",
  female = "female",
}

export enum PaymentType {
  cash = "cash",
  non_cash = "non_cash",
}

export const workersGenderArray = Object.freeze([
  {
    label: "Эрэгтэй",
    value: GenderType.male,
  },
  {
    label: "Эмэгтэй",
    value: GenderType.female,
  },
]);

export const unitTonnArray = Object.freeze([
  {
    label: "20 Тонн",
    value: 20,
  },
  {
    label: "40 Тонн",
    value: 40,
  },
]);

export enum UserRoleType {
  admin = "admin",
  transport_manager = "transport_manager",
  financier = "financier",
  cashier = "cashier",
  customer = "customer_company",
}

export const permissionArray = Object.freeze([
  UserRoleType.admin,
  UserRoleType.transport_manager,
  UserRoleType.financier,
  UserRoleType.cashier,
]);

export const permissionArraySuperAdmin = Object.freeze([
  UserRoleType.admin,
  UserRoleType.transport_manager,
  UserRoleType.financier,
  UserRoleType.cashier,
]);

export enum DevPlanQuistions {
  TreatInteract = "TreatInteract",
  LifePride = "LifePride",
  LifeValue = "LifeValue",
  PriorityService = "PriorityService",
}

export const ageOptions = Object.freeze([
  {
    label: "-54",
    value: ["0", "54"],
  },
  {
    label: "55-59",
    value: ["55", "59"],
  },
  {
    label: "60-64",
    value: ["60", "64"],
  },
  {
    label: "65-69",
    value: ["65", "69"],
  },
  {
    label: "70-74",
    value: ["70", "74"],
  },
  {
    label: "75+",
    value: ["75", "200"],
  },
]);

export const isDisablity = Object.freeze([
  {
    label: "Тийм",
    value: true,
  },
  {
    label: "Үгүй",
    value: false,
  },
]);

export enum Disability {
  A21 = 0,
  C36 = 1,
}
export const disabilityType = Object.freeze([
  {
    label: "A21",
    value: Disability.A21,
  },
  {
    label: "C36",
    value: Disability.C36,
  },
]);

export enum RoleType {
  aimag = 2,
  sum = 3,
}

export const roleSelect = Object.freeze([
  {
    label: "Аймаг / Хот",
    value: RoleType.aimag,
  },
  {
    label: "Сум / Дүүрэг",
    value: RoleType.sum,
  },
]);

export const WEEK_DAY_ARRAY = Object.freeze([
  {
    value: Week.Monday,
    label: "Mon",
  },
  {
    value: Week.Tuesday,
    label: "Tue",
  },
  {
    value: Week.Wednesday,
    label: "Wed",
  },
  {
    value: Week.Thursday,
    label: "Thu",
  },
  {
    value: Week.Friday,
    label: "Fri",
  },
  {
    value: Week.Saturday,
    label: "Sat",
  },
  {
    value: Week.Sunday,
    label: "Sun",
  },
]);
export const COMMISSION_ARRAY = Object.freeze(
  new Array(101)
    .fill(1)
    .map((_, index) => ({ label: index + " %", value: index }))
);

export const BANK_ARRAY = Object.freeze([
  {
    value: "tdb",
    label: "Trade and Development bank",
  },
  {
    value: "khaan",
    label: "Khan bank",
  },
  {
    value: "golomt",
    label: "Golomt bank",
  },
  {
    value: "khas",
    label: "Xac bank",
  },
  {
    value: "state",
    label: "State bank",
  },
  {
    value: "capitron",
    label: "Capitron bank",
  },
]);

export const CURRENCY_ARRAY = Object.freeze([
  {
    label: "MNT",
    value: "mnt",
    symbol: "₮",
  },
  {
    label: "USD",
    value: "usd",
    symbol: "$",
  },
]);

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const LANGUAGES = Object.freeze([
  {
    label: "Mongolia",
    value: "mn",
  },
  {
    label: "English",
    value: "en",
  },
  {
    label: "Korea",
    value: "kr",
  },
  {
    label: "China",
    value: "cn",
  },
  {
    label: "Russia",
    value: "ru",
  },
]);

export enum FieldRegistrationTab {
  CargoApproach = "cargo_approach",
  Remainder = "remainder",
  ArrivalField = "arrival_field",
}

export enum FininciarTab {
  CustomerCompany = 0,
  AdditionalFeeSettings = 1,
  CustomerAccountSettlement = 2,
  CancellingTicket = 3,
  CategoryType = 4,
  ForeignCustomer = 5,
}

export enum registerCustomerEnumTab {
  Worker = "worker",
  CustomerCompany = "customer_company",
}

export interface FininciarTabtButton {
  value: FininciarTab;
  label: string;
}

export interface FieldRegistrationTabtButton {
  value: registerCustomerEnumTab;
  label: string;
}

export enum CustomerAccountSettlementTab {
  ledger = "ledger",
  transaction = "transaction",
}

export enum DetailTab {
  container = "container",
  grant = "grant",
  shipping = "shipping",
}

export enum transictionTypeEnum {
  all = "",
  // debit = "debit",
  // credit = "credit",
}

export interface CustomerAccountSettlementTabtButton {
  value: CustomerAccountSettlementTab;
  label: string;
}

export interface DetailTabtButton {
  value: any;
  label: string;
}

export enum DirectionType {
  south = "south",
  north = "north",
}

export enum CategoryTypeEnum {
  assignation = "assignation",
  shipping = "shipping",
}

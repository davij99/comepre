import { EmployeeImg } from "../../model/employeeImg.ts";
import { Employee } from "../../model/employee.ts";

export type FETCH_EMPLOYEES = { type: "FETCH_EMPLOYEES"; payload: boolean };
export type FETCH_EMPLOYEES_SUCCESS = {
  type: "FETCH_EMPLOYEES_SUCCESS";
  payload: Employee[];
};
export type FETCH_EMPLOYEES_ERROR = {
  type: "FETCH_EMPLOYEES_ERROR";
  payload: boolean;
};
export type SET_EMPLOYEES_WITH_ICON = {
  type: "SET_EMPLOYEES_WITH_ICON";
  payload: EmployeeImg[];
};

export type EmployeesActions =
  | FETCH_EMPLOYEES
  | FETCH_EMPLOYEES_SUCCESS
  | FETCH_EMPLOYEES_ERROR
  | SET_EMPLOYEES_WITH_ICON;

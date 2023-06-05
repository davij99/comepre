import { Employee } from "../../model/employee.ts";
import { EmployeeImg } from "../../model/employeeImg.ts";
import { EmployeesActions } from "./employees.actions.ts";

type EmployeesState = {
  employees: Employee[];
  employeesWithIcon: EmployeeImg[];
  pending: boolean;
  error: boolean;
};

export const initialState: EmployeesState = {
  employees: [],
  employeesWithIcon: [],
  error: false,
  pending: false,
};

export function employeesReducer(
  state: EmployeesState,
  action: EmployeesActions
) {
  switch (action.type) {
    case "FETCH_EMPLOYEES":
      return { ...state, pending: action.payload, error: false };
    case "FETCH_EMPLOYEES_SUCCESS":
      return {
        ...state,
        pending: false,
        error: false,
        employees: action.payload,
      };
    case "FETCH_EMPLOYEES_ERROR":
      return { ...state, pending: false, error: action.payload };
    case "SET_EMPLOYEES_WITH_ICON":
      return { ...state, employeesWithIcon: action.payload };
    default:
      return state;
  }
}

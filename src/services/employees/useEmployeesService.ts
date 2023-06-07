import { useReducer } from "react";
import { employeesReducer, initialState } from "./employees.reducer.ts";
import { get } from "./employees.api.ts";
import IMAGES from "../../images.ts";

export function useEmployeesService() {
  const [state, dispatch] = useReducer(employeesReducer, initialState);

  function getEmployees() {
    dispatch({ type: "FETCH_EMPLOYEES", payload: true });

    get()
      .then((res) => {
        dispatch({ type: "FETCH_EMPLOYEES_SUCCESS", payload: res.items });
      })
      .catch(() => {
        dispatch({ type: "FETCH_EMPLOYEES_ERROR", payload: true });
      });
  }

  function getEmployeesWithIcon() {
    const newEmployees = state.employees.map((employee) => {
      const employeeWithIcon = { ...employee, icon: "" };
      const image = IMAGES.find((image) => employee.id === image.id);
      if (image) {
        employeeWithIcon.icon = image.icon;
      }
      return employeeWithIcon;
    });
    dispatch({ type: "SET_EMPLOYEES_WITH_ICON", payload: newEmployees });
  }

  return {
    actions: { getEmployees, getEmployeesWithIcon },
    state,
  };
}

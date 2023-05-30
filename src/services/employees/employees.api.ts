import { pb } from "../../pocketbase.ts";
import { Employee } from "../../model/employee.ts";

export function get() {
  return pb.collection("employees").getList<Employee>();
}

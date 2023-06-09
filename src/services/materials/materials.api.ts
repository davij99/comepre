import { pb } from "../../pocketbase.ts";
import { MaterialsByProject } from "../../model/materialsByProject.ts";

export function get() {
  return pb.collection("projects_materials").getList<MaterialsByProject[]>();
}

export function update(id: string, material_used_qty: number) {
  return pb.collection("projects").update(id, { material_used_qty });
}

import { pb } from "../../pocketbase.ts";
import { MaterialsByProject } from "../../model/materialsByProject.ts";
import { Material } from "../../model/material.ts";

export function get() {
  return pb.collection("projects_materials").getList<MaterialsByProject[]>();
}

export function update(id: string, material_used_qty: number) {
  return pb.collection("projects").update(id, { material_used_qty });
}

export function getMaterial(id:string)  {
  return pb.collection("materials").getOne<Material>(id);
}

// Esegui la chiamata per ottenere i progetti assegnati all'impiegato
import { pb } from "../../pocketbase";
import { ProjectsByEmployees } from "../../model/projectsByEmployees.ts";

export function get() {
  return pb.collection("projects_employees").getList<ProjectsByEmployees[]>();
}

// Esegui la chiamata per ottenere i progetti assegnati all'impiegato
import { pb } from "../../pocketbase";

export function get() {
  return pb.collection("projects_employees").getList();
}

export function update(id: string, hours: number) {
  return pb.collection("projects").update(id, { hours });
}

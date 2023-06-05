import { ProjectI } from "../../model/projectI";
import { pb } from "../../pocketbase";

export function get(){
    return pb.collection("projects").getList<ProjectI>();
}
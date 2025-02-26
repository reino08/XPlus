import { Patch } from "../../patch.ts";
import { extern_Sidebar } from "../externs.ts";

export const SidebarPatch: Promise<Patch> = extern_Sidebar.then(exports => new Patch(exports, "ZP"));

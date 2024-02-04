import { HttpHandler } from "msw";
import { partHandlers } from "./handlers/partHandlers";

const handlers: HttpHandler[] = [...partHandlers];

export default handlers;

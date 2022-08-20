import { serverHTTP } from "./http";
import "./websocket";
serverHTTP.listen(3000, () => console.log("Server is running on port 3000"));
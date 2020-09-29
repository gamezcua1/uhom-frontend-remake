import axios from "axios";
import { setHeaders } from "../lib/helpers/requestFormatter";

export default class EventLogsController {
  static post(type) {
    return axios.post("/event_logs", generateParam(type), setHeaders());
  }

  static contact() {
    return EventLogsController.post("contact");
  }
}

const generateParam = (type) => ({
  event_log: { name: type },
});

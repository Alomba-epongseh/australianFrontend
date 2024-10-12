import axios from "axios";
import { requestResponseInterceptors } from "@/interceptors";

class IPCService {
  async handleReq(actionEvent, method, options) {
    try {
      let apiResponse;
      requestResponseInterceptors.requestInterceptor();
      requestResponseInterceptors.responseInterceptor();
      switch (true) {
        case method === "POST":
          apiResponse = await axios.post(actionEvent, options);
          break;
        case method === "PUT":
          apiResponse = await axios.put(actionEvent, options);
          break;
        case method === "GET":
          apiResponse = await axios.get(actionEvent);
          break;
        case method === "DELETE":
          apiResponse = await axios.delete(actionEvent);
          break;
        default:
          break;
      }
      return apiResponse?.data;
    } catch (e) {
      return Promise.resolve(e);
    }
  }
}
export const ipcService = new IPCService();

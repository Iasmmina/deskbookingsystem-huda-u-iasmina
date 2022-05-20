import axios from "axios";
import { Config } from "../config";

class AdminService {
  constructor() {
    this.endpoint = Config.endpoint;
  }

  getAllFixRequest() {
    return axios
      .get(`${this.endpoint}/admin/fix-desk-request`)
      .then((response) => response.data);
  }
  getAllComments() {
    return axios
      .get(`${this.endpoint}/admin/comments`)
      .then((response) => response.data);
  }
  getReqById(id) {
    return axios
      .get(`${this.endpoint}/admin/fix-desk-request/${id}`)
      .then((response) => response.data);
  }
  accept(id) {
    return axios.post(`${this.endpoint}/admin/fix-desk-request/${id}/approve`, {
      id: id,
    });
  }
  decline(id) {
    return axios.post(`${this.endpoint}/admin/fix-desk-request/${id}/decline`, {
      id: id,
    });
  }
}

export const sharedAdminService = new AdminService();

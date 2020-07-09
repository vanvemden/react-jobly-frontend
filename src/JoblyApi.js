import axios from "axios";

const BASE_URL = "http://localhost:3001";

class JoblyApi {

  static async request(endpoint, params = {}, verb = "get") {
    console.debug("API Call:", endpoint, params, verb);

    const _token = localStorage.getItem("token");

    const data = (verb === "get")
      ? { params: { _token, ...params } } // GET
      : { _token, ...params };            // POST, PATCH

    const req = axios[verb](`${BASE_URL}/${endpoint}`, data);

    try {
      return (await req).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Indiv API routes

  static async getAllCompanies(term = "") {
    let res = await this.request(`companies?search=${term}`);
    return res.companies;
  }

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async getAllJobs(term = "") {
    let res = await this.request(`jobs?search=${term}`);
    return res.jobs;
  }

  static async userAuth(data) {
    const url = data.action === "signup" ? "users" : "login";
    let res = await this.request(url, data.inputs, "post");
    return res;
  }

  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }
}

export default JoblyApi;
import axios from "axios";

export default {
  // Gets all books
  getCustomers: function() {
    return axios.get("/api/customers");
  }
}

import axios from "axios";

const api = axios.create({
  baseURL: "https://corebiz-test.herokuapp.com/api/v1",
  transformResponse: (data) => JSON.parse(data)
});

export default api;
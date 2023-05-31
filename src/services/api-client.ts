import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "077c97db2ba74808bd10670b74e24ae5",
  },
});

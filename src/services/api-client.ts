import axios from "axios";
export default axios.create({
  params: {
    baseURL: "https://api.rawg.io/api",
    params: {
      key: "d474c646745b4246a04612b8edeef2a8",
    },
  },
});

import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "76df490a5f194662aec6b17e11ebeb9c",
  },
});

import axios from "axios";

export default function request(url: string) {
  return axios(url);
}

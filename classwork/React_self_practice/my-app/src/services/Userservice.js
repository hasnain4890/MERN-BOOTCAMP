import axios from "axios";
export class Userservice {
  static serviceurl = "https://jsonplaceholder.typicode.com/users";
  static getallusers() {
    return axios.get(this.serviceurl);
  }
}

import Http from "../assets/util/http";
export function login() {
  return Http.post("/login");
}

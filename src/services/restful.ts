import LoginRest from "./login.rest";

const loginRest = new LoginRest();

export function init() {
  //LOGIN
  loginRest.login();
}
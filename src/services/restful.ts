import LoginRest from "./login.rest";
import BowRest from "./bow.rest";

const loginRest = new LoginRest();
const bowRest = new BowRest;

export function init() {
  //LOGIN
  loginRest.devToken();
  loginRest.login();
  loginRest.registerUser();
  
  //BOW
  bowRest.getBows();
}
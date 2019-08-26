import LoginRest from "./login.rest";
import NotificationRest from "./notification.res";
import BowRest from "./bow.rest";

const loginRest = new LoginRest();
const notificationRest = new NotificationRest();
const bowRest = new BowRest();

export function init() {
  //LOGIN
  loginRest.devToken();

  loginRest.login();
  loginRest.registerUser();
  loginRest.getUsers();

  //NOTIFICATION
  notificationRest.deleteNotification();
  notificationRest.createNotification();

  //BOW
  bowRest.getBows();
}
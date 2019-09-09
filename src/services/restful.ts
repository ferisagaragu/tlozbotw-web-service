import LoginRest from "./login.rest";
import NotificationRest from "./notification.res";
import BowRest from "./bow.rest";
import MaterialRest from "./material.rest";

const loginRest = new LoginRest();
const notificationRest = new NotificationRest();
const bowRest = new BowRest();
const materialRest = new MaterialRest();

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
  bowRest.createBow();
  bowRest.updateBow();
  bowRest.deleteBow();

  //MATERIAL
  materialRest.getMaterial();
  materialRest.createMaterial();
  materialRest.updateMaterial();
  materialRest.deleteMaterial();
}
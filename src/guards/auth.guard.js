import { storageService } from "@/services";
import store from "@/store";
class AuthGuard {
  checkIflogged(to, from, next) {
    const user =
      store.getters.getUserState ||
      storageService.get("MIGRATEAUSTRIALIA_USER_INFO", true);
    if (!user) {
      return next("/auth/login");
    }
    return next();
  }
}

export const authGuard = {
  isLogged: (to, from, next) => new AuthGuard().checkIflogged(to, from, next),
};

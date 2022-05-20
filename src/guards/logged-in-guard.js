 import {sharedAuthService} from "../services/auth-service";

export function loggedInGuard(to, from, next) {
    if (sharedAuthService.isLoggedIn()) {
        next();
    } else {
        next({ name: 'login' });
    }
} 
 
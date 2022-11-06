import {Injectable} from "@angular/core";
import {
    ActivatedRouteSnapshot,
    CanActivate,
    CanActivateChild,
    CanDeactivate,
    CanLoad,
    Route,
    Router,
    RouterStateSnapshot,
    UrlSegment,
    UrlTree,
} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "../services/auth.service";

@Injectable({
    providedIn: "root",
})
export class AuthGuard
    implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {
    constructor(private router: Router, private authService: AuthService) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        if (this.authService.authenticated) {
            return true;
        }
        console.debug("=============>canActivate");
        this.router.navigate(["/auth/login"]);
        console.debug("=====/auth/login========>canActivate");
        return false;
    }

    canActivateChild(
        childRoute: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        if (this.authService.authenticated) {
            return true;
        }
        console.debug("=============>canActivateChild");

        this.router.navigate(["/auth/login"]);
        return false;
    }

    canDeactivate(
        component: unknown,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        if (this.authService.authenticated) {
            return true;
        }
        console.debug("=============>canDeactivate");
        this.router.navigate(["/auth/login"]);
        return false;
    }

    canLoad(
        route: Route,
        segments: UrlSegment[]
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        if (this.authService.authenticated) {
            return true;
        }
        console.debug("=============>canLoad");
        this.router.navigate(["/login"]);
        return false;
    }
}

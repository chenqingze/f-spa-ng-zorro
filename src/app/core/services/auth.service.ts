import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {HttpApi} from "../constants/http-api";
import {LocalStorageService} from "./local-storage.service";
import {finalize} from "rxjs";
import {Router} from "@angular/router";
import {NzModalService} from "ng-zorro-antd/modal";

@Injectable({
    providedIn: "root",
})
export class AuthService {
    readonly LOCAL_STORAGE_KEY_AUTHENTICATED = "AUTHENTICATED";

    get authenticated(): boolean {
        console.log("=======authenticated==========", !!this.localStorageService.getItem(
            this.LOCAL_STORAGE_KEY_AUTHENTICATED
        ));
        return !!this.localStorageService.getItem(
            this.LOCAL_STORAGE_KEY_AUTHENTICATED
        );
    }

    authenticate(credentials: any, callback?: Function) {
        const headers = new HttpHeaders(
            credentials ? {authorization: "Basic " + btoa(credentials.username + ":" + credentials.password)} : {}
        );
        this.http
            .get(HttpApi.me, {headers: headers})
            .subscribe((response) => {
                if (response) {
                    console.debug("=================>", response);
                    this.localStorageService.setItem(
                        this.LOCAL_STORAGE_KEY_AUTHENTICATED,
                        true
                    );
                } else {
                    this.localStorageService.clear();
                }
                return callback && callback();
            });
    }

    logout(callback?: Function) {
        this.http
            .post(HttpApi.logout, {})
            .pipe(
                finalize(() => {
                    this.clearAuthenticated();
                    this.modal.closeAll();
                    this.router.navigateByUrl("/auth/login");
                })
            )
            .subscribe(callback && callback());
    }

    private clearAuthenticated(): void {
        this.localStorageService.removeItem(
            this.LOCAL_STORAGE_KEY_AUTHENTICATED
        );
    }

    constructor(
        private router: Router,
        private http: HttpClient,
        private modal: NzModalService,
        private localStorageService: LocalStorageService
    ) {
    }
}

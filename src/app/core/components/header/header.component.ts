import {Component, OnInit} from "@angular/core";
import {AuthService} from "../../services/auth.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.less"],
})
export class HeaderComponent implements OnInit {
    logout(): void {
        this.authService.logout();
    }

    constructor(
        private authService: AuthService,
        private http: HttpClient,
        private router: Router
    ) {
    }

    ngOnInit(): void {
    }
}

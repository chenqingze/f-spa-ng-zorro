import {Component, OnInit} from "@angular/core";
import {UntypedFormBuilder, UntypedFormGroup, Validators,} from "@angular/forms";
import {AuthService} from "../../../core/services/auth.service";
import {Router} from "@angular/router";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.less"],
})
export class LoginComponent implements OnInit {
    validateForm!: UntypedFormGroup;

    login(): void {
        if (this.validateForm.valid) {
            console.log("submit", this.validateForm.value);
            this.authService.authenticate(
                this.validateForm.getRawValue(),
                () => {
                    this.router.navigateByUrl("/");
                }
            );
        } else {
            Object.values(this.validateForm.controls).forEach((control) => {
                if (control.invalid) {
                    control.markAsDirty();
                    control.updateValueAndValidity({onlySelf: true});
                }
            });
        }
    }

    constructor(
        private fb: UntypedFormBuilder,
        private authService: AuthService,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        this.validateForm = this.fb.group({
            username: [null, [Validators.required]],
            password: [null, [Validators.required]],
            remember: [true],
        });
    }
}

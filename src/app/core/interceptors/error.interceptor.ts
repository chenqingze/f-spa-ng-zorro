import {Injectable} from "@angular/core";
import {catchError, Observable, throwError} from "rxjs";
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,} from "@angular/common/http";
import {AuthService} from "../services/auth.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {
    }

    intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
        return next.handle(request).pipe(
            //,retry(2) // 重试]
            catchError(this.handleError)
        );
    }

    // Handle API errors
    private handleError = (err: HttpErrorResponse) => {
        let message = "";
        if (err.error instanceof ErrorEvent || err.status === 0) {
            // handle client-side or network error occurred Handle it accordingly.
            // console.error('An client side error occurred:', err.error);
            message = `${err.error.message}`;
        } else {
            // handle server-side error
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            // console.error(`Backend returned code ${err.status}, message ${err.message} body was: `, err.error);
            message =
                `Backend returned code ${err.status} , Message: ${err.message},  Body was: ` +
                err.error;
            switch (err.status) {
                case 401: // Unauthorized
                    this.authService.logout();
                    break;
                case 403: // Forbidden
                    this.authService.logout();
                    break;
                default:
                // todo
            }
        }
        return throwError(() => new Error(message));
    };
}

import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse,} from "@angular/common/http";
import {Observable, tap} from "rxjs";

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
    constructor() {
    }

    intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
        if (request.method === "GET") {
            const time = new Date().getTime().toString();
            const dupReq = request.clone({
                params: request.params.set("nocache", time),
            });
            return next
                .handle(dupReq)
                .pipe(
                    tap((httpEvent: HttpEvent<any>) =>
                        this.logResponse(httpEvent)
                    )
                );
        }
        return next
            .handle(request)
            .pipe(
                tap((httpEvent: HttpEvent<any>) => this.logResponse(httpEvent))
            );
    }

    private logResponse(httpEvent: HttpEvent<any>): void {
        if (httpEvent instanceof HttpResponse) {
            console.log("Interceptor Logging");
            console.log(httpEvent);
        }
    }
}

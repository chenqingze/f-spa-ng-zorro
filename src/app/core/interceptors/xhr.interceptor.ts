import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class XhrInterceptor implements HttpInterceptor {
    constructor() {
    }

    intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
        request = request.clone({
            // url: request.url.replace('http://', 'https://'), // 使用安全SSL链接
            headers: request.headers.set("X-Requested-With", "XMLHttpRequest"), // 修改http header ,这里可以增加token等
        });
        return next.handle(request);
    }
}

import {Injectable} from '@angular/core';
import {BaseService} from "../../../core/services/base.service";
import {Dept} from "./dept.model";
import {HttpApi} from "../../../core/constants/http-api";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class DeptService extends BaseService<Dept> {

    constructor(httpClient: HttpClient) {
        super(httpClient, HttpApi.dept);
    }

    test() {
        this.httpClient.get(this.url);
    }
}

import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Page} from "../../../shared/model/page.model";
import {HttpApi} from "../../../core/constants/http-api";
import {Permission} from "./permission.model";

@Injectable({
    providedIn: 'root'
})
export class PermissionService {

    getChildren(parentId: string): Observable<Permission[]> {
        let id = parentId ? parentId : '0';
        return this.httpClient.get<Permission[]>(`${HttpApi.permission}/${id}/children`);
    }

    getList(page: number = 0, size: number = 10): Observable<Page<Permission>> {
        let params = new HttpParams().append('page', page).append('size', size);
        return this.httpClient.get<Page<Permission>>(HttpApi.permission, {params: params});
    }

    getById(id: string): Observable<Permission> {
        return this.httpClient.get<Permission>(`${HttpApi.permission}/${id}`);
    }

    create(permission: Permission): Observable<Permission> {
        console.log('==============>',permission)
        return this.httpClient.post<Permission>(HttpApi.permission, permission);
    }


    update(id: string, permission: Permission): Observable<Permission> {
        return this.httpClient.put<Permission>(`${HttpApi.permission}/${encodeURI(id)}`, permission);
    }

    deleteById(id: string): Observable<unknown> {
        return this.httpClient.delete(`${HttpApi.permission}/${encodeURI(id)}`);
    }

    constructor(private httpClient: HttpClient) {
    }

}

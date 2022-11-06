import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Page} from "../../shared/model/page.model";

/**
 * todo: 范型service
 */
export abstract class BaseService<T> {


    protected constructor(protected httpClient: HttpClient, protected readonly url: string) {
    }


    getList(page?: number, size?: number): Observable<Page<T>> {
        if (page && size) {
            let params = new HttpParams().append('page', page).append('size', size);
            return this.httpClient.get<Page<T>>(this.url, {params: params});
        }
        return this.httpClient.get<Page<T>>(this.url);
    }

    getById(id: string): Observable<T> {
        return this.httpClient.get<T>(`${this.url}/${id}`);
    }

    create(t: T): Observable<T> {
        return this.httpClient.post<T>(this.url, t);
    }

    update(id: string, t: T): Observable<T> {
        return this.httpClient.put<T>(`${this.url}/${encodeURI(id)}`, t);
    }

    deleteById(id: string): void {
        this.httpClient.delete(`${this.url}/${encodeURI(id)}`);
    }
}

import {Injectable} from "@angular/core";
import {CONFIG} from "../constants/config";

@Injectable({
    providedIn: "root",
})
export class SessionStorageService {
    constructor() {
        if (!sessionStorage) {
            throw new Error('Current browser does not support Session Storage');
        }
    }

    public getItem(key: string): unknown {
        return JSON.parse(localStorage.getItem(`${CONFIG.APP_PREFIX}${key}`)!);
    }

    public setItem(key: string, value: unknown) {
        localStorage.setItem(
            `${CONFIG.APP_PREFIX}${key}`,
            JSON.stringify(value)
        );
    }

    public removeItem(key: string) {
        localStorage.removeItem(`${CONFIG.APP_PREFIX}${key}`);
    }

    public clear() {
        localStorage.clear();
    }
}

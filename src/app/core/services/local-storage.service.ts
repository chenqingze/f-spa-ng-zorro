import {Injectable} from "@angular/core";
import {CONFIG} from "../constants/config";

@Injectable({
    providedIn: "root",
})
export class LocalStorageService {
    constructor() {
        if (!localStorage) {
            throw new Error('Current browser does not support Local Storage');
        }
    }

    public getItem(key: string): unknown {
        const item = localStorage.getItem(`${CONFIG.APP_PREFIX}${key}`);
        return item ? JSON.parse(item) : item;
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

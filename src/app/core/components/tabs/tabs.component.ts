import {Component, OnInit} from '@angular/core';
import {ActivatedRouteSnapshot, ActivationEnd, Event, Router} from "@angular/router";
import {filter} from "rxjs";

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.less']
})
export class TabsComponent implements OnInit {

    tabs: { path: string; title: string; disabled?: boolean }[] = [];

    closeTab({index}: { index: number }): void {
        if (this.tabs.length > 1) {
            this.tabs.splice(index, 1);
        }
    }

    constructor(private router: Router) {
        this.router.events.pipe(
            filter((e: Event): e is ActivationEnd => e instanceof ActivationEnd)
        ).subscribe((e: ActivationEnd) => {
            if (!e.snapshot.routeConfig?.path) {
                return;
            }
            const path = this.takeFullUrl(e.snapshot);
            const isExit = this.tabs.some((item, i): boolean => {
                if (item.path === path) {
                    return true;
                }
                return false;
            });
            if (!isExit) {
                const title = e.snapshot.routeConfig?.title || 'new tab';
                const tab = {path: path, title: `${title}`};
                this.tabs.push(tab);
            }
        });


    }

    /**
     * 获取路由全路径
     * @param route
     * @private
     */
    private takeFullUrl(route: ActivatedRouteSnapshot): string {
        let next: any = route;
        // Since navigation is usually relative
        // we go down to find out the child to be shown.
        while (next.firstChild) {
            next = next.firstChild;
        }
        const segments = [];
        // Then build a unique key-path by going to the root.
        while (next) {
            segments.push(next.url.join('/'));
            next = next.parent;
        }
        return `/${(segments.reverse().filter(val => val)).join('/')}`;
    }

    /**
     * 获取正确的标题
     * @param route
     * @private
     */
    private takeFinalTitle(route: ActivatedRouteSnapshot): string {
        let next: any = route;
        // Since navigation is usually relative
        // we go down to find out the child to be shown.
        while (next.firstChild) {
            next = next.firstChild;
        }
        const segments = [];
        // Then build a unique key-path by going to the root.
        while (next) {
            segments.push(next.url.join('/'));
            next = next.parent;
        }
        return segments.reverse().filter(x => x !== null).join('/');
    }

    ngOnInit(): void {

    }

}



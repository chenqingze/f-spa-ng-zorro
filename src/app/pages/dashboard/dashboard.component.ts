import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpApi} from "../../core/constants/http-api";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
    testGetStr: any;
    testPostStr: any;

    constructor(private httpClient: HttpClient) {
    }

    ngOnInit(): void {
    }

    testGet(e: Event) {
        e.preventDefault();
        this.httpClient.get(HttpApi.testGet).subscribe(data => this.testGetStr = JSON.stringify(data));
    }

    testPOst($event: MouseEvent) {
        $event.preventDefault();
        this.httpClient.post(HttpApi.testPost, {}).subscribe(data => this.testPostStr = JSON.stringify(data));
    }
}

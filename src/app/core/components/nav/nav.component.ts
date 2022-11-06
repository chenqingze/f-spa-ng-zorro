import {Component, Input, OnInit} from "@angular/core";

@Component({
    selector: "app-nav",
    templateUrl: "./nav.component.html",
    styleUrls: ["./nav.component.less"],
})
export class NavComponent implements OnInit {
    @Input() isCollapsed = false;

    constructor() {
    }

    ngOnInit(): void {
    }
}

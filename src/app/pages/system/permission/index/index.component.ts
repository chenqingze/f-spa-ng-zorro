import {Component, OnInit} from "@angular/core";
import {PermissionService} from "../permission.service";
import {Permission} from "../permission.model";
import {ModalService} from "../../../../core/services/modal.service";
import {AddComponent} from "../add/add.component";

@Component({
    selector: "app-permission",
    templateUrl: "./index.component.html",
    styleUrls: ["./index.component.less"],
})
export class IndexComponent implements OnInit {
    checked = false;
    loading = false;
    indeterminate = false;
    listOfData: readonly Permission[] = [];
    listOfCurrentPageData: readonly Permission[] = [];

    onCurrentPageDataChange(listOfCurrentPageData: readonly Permission[]): void {
        this.listOfCurrentPageData = listOfCurrentPageData;
        this.refreshCheckedStatus();
    }

    refreshCheckedStatus(): void {
        const listOfEnabledData = this.listOfCurrentPageData.filter(({disabled}) => !disabled);
    }

    sendRequest(): void {
        this.loading = true;
    }

    ngOnInit(): void {
        this.permissionService.getList().subscribe(data => this.listOfData = data.content)
    }

    add(): void {
        this.modalService.createComponentModal(AddComponent, "新增权限");
    }

    edit(id: string): void {
        this.permissionService.getById(id).subscribe(data => console.log(data));
    }

    saveEdit(id: string, permission: Permission): void {
        this.permissionService.update(id, permission).subscribe();
    }

    delete(id: string) {
        this.permissionService.deleteById(id).subscribe(data => {
            console.log(data);
        })
    }


    constructor(private permissionService: PermissionService, private modalService: ModalService) {
    }


}

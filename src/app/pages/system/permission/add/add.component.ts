import {Component, OnInit} from '@angular/core';
import {PermissionService} from "../permission.service";
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {NzFormatEmitEvent, NzTreeNode, NzTreeNodeOptions} from "ng-zorro-antd/tree";
import {Permission, TargetAttribute, UiType} from "../permission.model";
import {NzModalRef} from "ng-zorro-antd/modal";

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.less']
})
export class AddComponent implements OnInit {
    uiType = UiType;
    targetAttribute = TargetAttribute;
    validateForm: UntypedFormGroup;
    parentValue: string = '0';
    permission: Permission = {
        id: '',
        parent: '',
        permit: '',
        description: '',
        disabled: false,
        children: [],
        uiConfig: {
            uiType: 'MODULE',
            title: '',
            sort: 1,
            cached: false,
            shownInMenu: false,
            expandable: false,
            hiddenInBreadcrumb: false,
            path: '',
            externalLink: false,
            target: '_tab',
            icon: '',
        }
    };
    permissionNodes: NzTreeNodeOptions[] | NzTreeNode[] = [
        {
            title: '顶级权限类目',
            key: '0',
            icon: '',
            disabled: false,
            selected: true,
            children: []
        }
    ];

    get uiTypeValue(): any {
        return this.validateForm.get('uiType')?.value;
    }

    submitForm(): void {
        console.log('submit', this.validateForm.value);
        this.permissionService.create(this.validateForm.value).subscribe(data => {
            console.log('============next', data);
            setTimeout(() => this.modal.destroy(), 1000);
        });
    }

    cancelForm(e: MouseEvent): void {
        e.preventDefault();
        this.modal.destroy();
    }

    constructor(private permissionService: PermissionService, private fb: UntypedFormBuilder, private modal: NzModalRef) {
        this.validateForm = this.fb.group({
            parent: [this.parentValue == '0' ? null : this.parentValue, [Validators.required]],
            title: [this.permission.uiConfig.title, [Validators.required]],
            permit: [this.permission.permit, [Validators.required]],
            description: ['', [Validators.required]],
            sort: [1, [Validators.required]],
            uiType: ['MODULE', [Validators.required]],
            cached: [false],
            shownInMenu: [false],
            expandable: [false],
            hiddenInBreadcrumb: [false],
            path: [''],
            externalLink: [false],
            target: ['_tab'],
            icon: [''],
        });
    }

    ngOnInit(): void {
        // this.permissionService.getChildren().subscribe(data => this.permissionNodes[0].addChildren(this.convertPermissionArrayToNodes(data)));
    }

    onExpandChange(e: NzFormatEmitEvent): void {
        const node = e.node;
        if (node && node.getChildren().length === 0 && node.isExpanded) {
            this.loadChildrenNode(node);
        }
    }

    loadChildrenNode(node: NzTreeNode): void {
        this.permissionService.getChildren(node.key).subscribe(data => node.addChildren(this.convertPermissionArrayToNodes(data)));
    }

    private convertPermissionArrayToNodes(permissionList: Permission[]): NzTreeNodeOptions [] {
        // todo:完善
        // return permissionList.map(permission => {
        //     return {
        //         key: permission?.id | '0',
        //         title: permission.uiConfig?.title | '无',
        //     }
        // });
        return [];
    }


}

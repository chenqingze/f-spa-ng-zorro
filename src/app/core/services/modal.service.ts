import {Injectable, Type} from '@angular/core';
import {NzModalRef, NzModalService} from "ng-zorro-antd/modal";
import {NzSafeAny} from "ng-zorro-antd/core/types";

@Injectable({
    providedIn: 'root'
})
export class ModalService {

    constructor(private modal: NzModalService) {
    }

    createComponentModal(modalComponent: Type<NzSafeAny>, title: string, nzComponentParams?: object): void {
        const modal: NzModalRef = this.modal.create({
            nzTitle: title,
            nzContent: modalComponent,
            // nzViewContainerRef: this.viewContainerRef,
            nzComponentParams: nzComponentParams,
            nzFooter: null,
            /*nzFooter: [{
                    label: cancelLabel,
                    type: 'default', // 类型
                    danger: false, // 是否danger
                    size: 'default',// 大小
                    autoLoading: true,// 默认为true，若为true时，当onClick返回promise时此按钮将自动置为loading状态
                    show: true,// 是否显示该按钮
                    disabled: false, // 是否禁用
                    onClick: componentInstance => {// 按钮点击回调
                        // componentInstance!.title = 'title in inner component is changed';
                        modal.destroy();
                    }
                },
                {
                    label: okLabel, // 按钮文本
                    type: 'primary', // 类型
                    danger: false, // 是否danger
                    size: 'default',// 大小
                    autoLoading: true,// 默认为true，若为true时，当onClick返回promise时此按钮将自动置为loading状态
                    show: true,// 是否显示该按钮
                    disabled: false, // 是否禁用
                    onClick(componentInstance): void {// 按钮点击回调
                        console.log(componentInstance);
                        if (componentInstance.modalCallback) {
                            componentInstance.modalCallback().subscribe(() => {
                                this.loading = true;
                                setTimeout(() => {
                                    this.loading = false;
                                    this.disabled = true;
                                    // this.label = 'can not be clicked！';
                                }, 1000);
                                setTimeout(() => modal.destroy(), 1000);
                            });
                        } else {
                            modal.destroy();
                        }

                    }
                }]*/
        });
        // const instance = modal.getContentComponent();
        modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));
        // Return a result when closed
        modal.afterClose.subscribe(result => console.log('[afterClose] The result is:', result));
        // delay until modal instance created
        // setTimeout(() => {
        //     instance.subtitle = 'sub title is changed';
        // }, 2000);
    }


}

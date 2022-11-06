export const UiType: Array<{ label: string; value: string }> = [
    {label: 'MODULE', value: 'MODULE'},//功能模块.
    {label: 'PAGE', value: 'PAGE'},//页面
    {label: 'ELEMENT', value: 'ELEMENT'}//页面元素：button、slider etc.
];
export const TargetAttribute: Array<{ label: string; value: string }> = [
    {label: '_tab', value: '_tab'},
    {label: '_blank', value: '_blank'},
    {label: '_self', value: '_self'},
    {label: '_parent', value: '_parent'},
    {label: '_top', value: '_top'}
];

export interface Permission {
    readonly id?: string,
    parent: string,
    permit: string,
    description: string,
    disabled: boolean,
    createdAt?: string,
    createdBy?: string,
    updatedAt?: string,
    updatedBy?: string,
    children?: Permission[],
    uiConfig: {
        uiType: string,
        title: string,
        sort: number,
        cached?: boolean,
        shownInMenu?: boolean,
        expandable?: boolean,
        hiddenInBreadcrumb?: boolean,
        path?: string,
        externalLink?: boolean,
        target?: string,
        icon?: string,
        menuNodeRoot?: boolean,
    }

}

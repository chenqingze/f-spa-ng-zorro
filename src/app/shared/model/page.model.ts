export interface Page<T> {
    content: T[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    first: boolean;
}

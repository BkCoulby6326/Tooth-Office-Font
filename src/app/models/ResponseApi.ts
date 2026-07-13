export interface ResponseApi<T> {
    statut: string;
    message: string;
    data: T;
}
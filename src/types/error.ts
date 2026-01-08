export class AppError {
    responseCode: number;
    errorCode: string;
    message: string;
    data?: unknown;

    constructor(
        responseCode: number,
        errorCode: string,
        message: string,
        data?: unknown
    ) {
        this.responseCode = responseCode;
        this.errorCode = errorCode;
        this.message = message;
        this.data = data;
    }
}

export type ErrorInfo = {
    responseCode: number,
    errorCode: string,
    defaultMessage: string
};

import CustomError from "./CustomError";

class NotFoundError extends CustomError {

    constructor(message: string) {
        super(message, 404, "NOT_FOUND");
    }
}

export default NotFoundError;
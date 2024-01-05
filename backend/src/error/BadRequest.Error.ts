import CustomError from "./CustomError";

class BadRequestError extends CustomError {

    constructor(message: string) {
        super(message, 400, "BAD_REQUEST");

        Object.setPrototypeOf(this, CustomError.prototype);
    }
}

export default BadRequestError;
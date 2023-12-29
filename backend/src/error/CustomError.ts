class CustomError extends Error   {
    public readonly code: string;
    public readonly statusCode: number;
    
    constructor(message: string, statusCode: number, code: string) {
        super(message);
        
        this.code = code;
        this.statusCode = statusCode;
        
        Object.setPrototypeOf(this, CustomError.prototype);
    }
}

export default CustomError;
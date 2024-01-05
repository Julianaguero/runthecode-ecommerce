class CustomError extends Error  {
    public code: string;
    public statusCode: number;
    
    constructor(message: string, statusCode: number, code: string) {
        super(message);
        
        this.code = code;
        this.statusCode = statusCode;
        
        Object.setPrototypeOf(this, CustomError.prototype);
    }
}

export default CustomError;
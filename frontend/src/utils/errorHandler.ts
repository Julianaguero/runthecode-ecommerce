// TODO: delete console.error for production

export const errorHandler = (error: unknown): Error => {
    
    if (error instanceof Error) {
        console.error(error.message);
        throw error;  // Rethrow the error to handle it in the component
    } else {
        console.error("Unknown error occurred.");
        throw new Error("Unknown error occurred.");
    }
}
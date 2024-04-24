declare global {
    namespace NodeJS {
      interface ProcessEnv {
        [key: string]: string | undefined;
        PORT: string;
        // add more environment variables and their types here
      }
    }
  }

declare namespace Express {
    export interface Request {
      _id: string; 
      name: string;
      email: string;
      password: string;
      isAdmin: boolean;
      token: string,
    }
  }
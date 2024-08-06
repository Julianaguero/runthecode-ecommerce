declare module "Express" {
    export interface Request {
        user: {
            _id: string,
            name: string,
            mail: string,
            password: string,
            isAdmin: boolean,
            token: string,
        }
    }
}
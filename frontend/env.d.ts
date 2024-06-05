/// <reference types="vite/client" />

export interface ImportMetaEnv {
    readonly VITE_BASE_URL: string;
    // Agrega aquí otras variables de entorno que uses
  }
  
export  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }

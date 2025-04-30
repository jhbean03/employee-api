interface ImportMetaEnv {
    readonly VITE_APP_SERVER_PORT: string;
    readonly VITE_APP_SERVER_HOSTNAME: string;
}
  
interface ImportMeta {
    readonly env: ImportMetaEnv;
}
declare namespace NodeJS {
  export interface ProcessEnv {
    PORT?: string;
    COOKIES_SECRET?: string;
    LOG_LEVEL?: string;
    IDP_CERT_PEM_FILE: string;
    SAML_ISSUER: string;
    SAML_PRTOCOL_URL: string;
    NODE_ENV?: 'development' | 'production';
  }
}

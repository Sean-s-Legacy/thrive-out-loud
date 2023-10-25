import * as functions from "firebase-functions";

export const BREVO_API_KEY = functions.config().brevo.brevo_api_key

export const CLIENT_ID = functions.config().kms.client_id;
export const MESSAGING_SENDER_ID = functions.config().kms.messaging_sender_id;
export const MEASUREMENT_ID = functions.config().kms.measurement_id;
export const STORAGE_BUCKET = functions.config().kms.storage_bucket;
export const DATABASE_URL = functions.config().kms.database_url;
export const PRIVATE_KEY = functions.config().kms.private_key;
export const API_KEY = functions.config().kms.api_key;
export const PRIVATE_KEY_ID = functions.config().kms.private_key_id;
export const AUTH_URI = functions.config().kms.auth_uri;
export const TYPE = functions.config().kms.type;
export const AUTH_PROVIDER_X509_CERT_URL = functions.config().kms.auth_provider_x509_cert_url;
export const AUTH_DOMAIN = functions.config().kms.auth_domain;
export const TOKEN_URI = functions.config().kms.token_uri;
export const PROJECT_ID = functions.config().kms.project_id;
export const APP_ID = functions.config().kms.app_id;
export const CLIENT_EMAIL = functions.config().kms.client_email;
export const CLIENT_X509_CERT_URL = functions.config().kms.client_x509_cert_url;


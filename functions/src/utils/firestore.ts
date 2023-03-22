
/* Firestore database */

export let db:FirebaseFirestore.Firestore;
export const init = (database: FirebaseFirestore.Firestore) => {
  db = database;
}


/* USERS */

// User Fields
export const enum USER_FIELDS {
    USER_EMAIL = "user_email",
    USER_IMAGE_URL_PATH = "user_image_url_path",
    USER_NAME = "user_name",
    FIRST_NAME = "user_name_first",
    LAST_NAME = "user_name_last",
    MENTEE_PRONOUNS = "mentee_pronouns",
    PASSWORD = "user_pswd",
    USER_PHONE = "user_phone",
    COUNTRY_CODE = "country_code",
    PHONE_NUMBER = "user_phone",
    
  }

  /* DB Collections Name */

export const enum COLLECTION {
    USERS = "users",
  }
  
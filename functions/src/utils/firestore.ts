
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
    PASSWORD = "user_pswd",
    USER_PHONE = "user_phone",
    COUNTRY_CODE = "country_code",
    PHONE_NUMBER = "user_phone",

    // others
    MENTEE_PRONOUNS = "mentee_pronouns",
    ABOUT_MENTEE="about_mentee",
    MENTEE_FOCUS_AREA="mentee_focus_area",
    MENTEE_SOCIAL_LINK= "mentee_social_link",
    
  }

  /* DB Collections Name */

export const enum COLLECTION {
    USERS = "users",
  }
  
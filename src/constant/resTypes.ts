export enum RES_TYPES {
    CREATE = 'Data Insert Successfully',
    UPDATE = 'Data Update Successfully',
    DELETE = 'Data deleted Successfully',
    FETCH = 'Data Fetch Successfully',
    ID_NOT_FOUND = 'Id not found/Match',
    LOGIN = 'Congrats! You have Successfully logged in',
    AUTH_FAIL = 'Authentication failed. Wrong Password or email',
    LOGOUT = 'User Logged out Successfully',
    VALID_DATE = 'Please Select Valid date',
    NOT_APPLY = 'You Can Not Apply Leave at HoliDay',
    NOT_DELETE = 'This Leave is Approved you can not delete it.',
    NOT_PERMISSION = 'You do not have permission to access this route.',
    NO_FOUND = 'This Data not found',
    ALREADY_LOGOUT = 'User Have Already Logout',
    LOGOUT_FAIL = 'logout Failed',
    UNIQUE = 'This data is already stored Please give unique Email or userName',
    BAD_URL = 'Bad Request URL not Found',
    UNIQUE_DATE = 'You already assign for different task at this time',
    SOMETHING_WRONG = 'Something went wrong !!! You try to insert single in bulk.',
    ACTIVE_YOUR_ACCOUNT = 'First You have to active your account after you can access this route',
    INTIALROUTES_SUBCLASSES = 'Subclasses must implement initializeRoutes method.',
    USER_NOT_FOUND = 'User not found',
    OTP = 'Sucessfully Send OTP',
    NOT_VALIDATE_OTP = 'Invalid OTP Please Check',
    VALIDATE_OTP = 'sucessfully verify OTP',
    INVALID_DATE = 'End date must be greater than or equal to start date',
    DUPLICATEUSER = 'User Already Exists',
    INVALID_TIME = 'Clock-out time must be greater than clock-in time.',
    FILE_NOTFOUND = 'File not found pls insert file',
    CHAT_READ = 'successfully message read from chat',
    CHAT_UNREAD = 'successfully Fetched chat Unread message Count',
    NOT_FOUND_ID = 'Please Select First Facility',
}

export enum ROLES {
    ADMIN = 1,
    USER = 0,
    REPORTS = 2,
}

export enum GROUPS {
    ALLSYSTEM = 0,
    ADMIN = 1,
    ONLYUSERS = 2,
}

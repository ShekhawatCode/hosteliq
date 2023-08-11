export interface AdminUserType {
  toJSON(): AdminUserType;
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordUpdatedAt: number;
  loginAttempt: number;
  lastLogin: number;
  authToken: string;
  resetPasswordToken: string;
  userType: string;
  status: string;
  temestamp: object;
}

export interface AdminUserLoginRequestType {
  body: {
    email: string;
    password: string;
  };
}

export interface AdminUserForgotPasswordRequestType {
  body: {
    email: string;
  };
}

export interface AdminUserCreateRequestType {
  body: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  };
}

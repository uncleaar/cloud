export interface User {
  entityId: string;
  email: string;
  name: string;
  surname: string;
  createdDate: Date;
  role: string;
  active: boolean;
}

export interface Response {
  status: string;
  message: string;
}

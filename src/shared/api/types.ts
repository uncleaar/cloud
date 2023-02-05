export interface StatusCode {
  code: string;
  description?: any;
}

export interface Client {
  entityId: number;
  surname: string;
  name: string;
  patronymic: string;
  mail: string;
  role: string;
  createdDate: Date;
  lastModifiedDate: Date;
  active: boolean;
}

export interface ObjectResponse {
  client: Client;
  token: string;
}

export interface RootObject {
  status: StatusCode;
  object: Object;
}

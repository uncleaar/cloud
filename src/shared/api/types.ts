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

export interface RootObjectMe {
  status: StatusCode;
  object: Client;
}

export interface RootObjectSignIn {
  status: StatusCode;
  object: {
    client: Client;
    token: string;
  };
}

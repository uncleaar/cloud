interface User {
  entityId: string;
  mail: string;
  name: string | null;
  surname: string;
  patronymic: string;
  password?: string;
  createdDate?: Date;
  lastModifiedDate?: Date;
  role: string;
  active: boolean;
}

interface LoginUser {
  mail: string;
  password: string;
}

interface RegisterUser {
  surname: string;
  name: string;
  patronymic: string;
  mail: string;
  password: string;
}

interface Response {
  user: {
    client: User;
  };
  token: string | any;
}

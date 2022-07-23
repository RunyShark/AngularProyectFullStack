export interface AuthRespse {
  Erro: boolean;
  msg: string;
  user: User;
}

export interface ErrorLogin {
  errors: Error[];
}

export interface Error {
  value: string;
  msg: string;
  param: string;
  location: string;
}
export interface AuthLogin {
  Erro: boolean;
  msg: string;
  user: User;
}

export interface User {
  uid: number;
  email: string;
  name: string;
  toke?: string;
}

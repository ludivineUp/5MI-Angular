
export class User {

  login: string;
  password: string;


  constructor(login?: string, password?: string) {
    this.login = login === undefined ? '' : login;
    this.password = password === undefined ? '' : password;
  }
}

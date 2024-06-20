import { jwtDecode } from "jwt-decode"

export class UserData {
  constructor() { }

  getUserToken(): any {
    const userString = localStorage.getItem('bearer');
    return userString ? JSON.parse(userString) : null;
  }

  setUserToken(user: any): void {
    localStorage.setItem('bearer', JSON.stringify(user));
  }

  clearUserToken(): void {
    localStorage.removeItem('bearer');
  }

  getDecodedUser(): any {
    const userData = this.getUserToken();
    if (userData && userData.valueOrDefault) {
      const token = userData.valueOrDefault;
      return jwtDecode(token)
    }
    return null;
  }
}

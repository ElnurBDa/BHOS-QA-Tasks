import type { AuthProvider } from "./AuthProvider";

export class AuthManager {
  private authProvider: AuthProvider;

  constructor(authProvider: AuthProvider) {
    this.authProvider = authProvider;
  }

  sign(email: string, password: string): boolean {
    try {
      const result = this.authProvider.sign(email, password);
      return result !== null;
    } catch (error) {
      return false;
    }
  }
}

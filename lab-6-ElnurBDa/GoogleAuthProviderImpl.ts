import type { AuthProvider } from "./AuthProvider";

export class GoogleAuthProviderImpl implements AuthProvider {
  sign(email: string, password: string): string {
    return `google_${Math.random().toString(36).substr(2, 30)}`;
  }
}

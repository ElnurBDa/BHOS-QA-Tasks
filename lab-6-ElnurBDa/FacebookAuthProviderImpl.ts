import type { AuthProvider } from "./AuthProvider";

export class FacebookAuthProviderImpl implements AuthProvider {
  sign(email: string, password: string): string {
    return `fb_${Math.random().toString(36).substr(2, 30)}`;
  }
}

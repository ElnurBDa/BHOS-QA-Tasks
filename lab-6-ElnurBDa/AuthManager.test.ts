import { describe, it, expect } from "bun:test";
import { AuthManager } from "./AuthManager";
import type { AuthProvider } from "./AuthProvider";

class FacebookAuthProviderMock implements AuthProvider {
  private shouldSucceed: boolean;

  constructor(shouldSucceed: boolean) {
    this.shouldSucceed = shouldSucceed;
  }

  sign(email: string, password: string): string | null {
    if (this.shouldSucceed) {
      return "success";
    } else {
      throw new Error("Authentication failed");
    }
  }
}

describe("AuthManager", () => {
  it("should return true when authentication succeeds", () => {
    const authProvider = new FacebookAuthProviderMock(true);
    const authManager = new AuthManager(authProvider);

    const result = authManager.sign("test@example.com", "password123");
    expect(result).toBe(true);
  });

  it("should return false when authentication fails", () => {
    const authProvider = new FacebookAuthProviderMock(false);
    const authManager = new AuthManager(authProvider);

    const result = authManager.sign("test@example.com", "password123");
    expect(result).toBe(false);
  });

  it("should return false when an exception is thrown", () => {
    const authProvider = new FacebookAuthProviderMock(false);
    const authManager = new AuthManager(authProvider);

    const result = authManager.sign("test@example.com", "wrongpassword");
    expect(result).toBe(false);
  });
});

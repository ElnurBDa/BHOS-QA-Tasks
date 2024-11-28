export interface AuthProvider {
    sign(email: string, password: string): string | null;
}
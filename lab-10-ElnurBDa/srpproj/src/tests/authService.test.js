const AuthService = require('../services/authService');
const srpClient = require('secure-remote-password/client');

describe('SRP Authentication Tests', () => {
    let authService;
    const username = 'testuser@example.com';
    const password = 'strongpassword';

    beforeAll(() => {
        authService = new AuthService();
    });

    test('Step 1: User sign up', () => {
        const { salt, verifier } = authService.signUp(username, password);
        expect(salt).toBeDefined();
        expect(verifier).toBeDefined();
    });

    test('Step 2: Initiate login', () => {
        const { salt, publicEphemeral } = authService.initiateLogin(username);
        expect(salt).toBeDefined();
        expect(publicEphemeral).toBeDefined();
    });

    test('Step 3: Complete authentication', () => {
        const clientEphemeral = srpClient.generateEphemeral();

        const { salt, publicEphemeral: serverPublicEphemeral } = authService.initiateLogin(username);
        const privateKey = srpClient.derivePrivateKey(salt, username, password);
        const clientSession = srpClient.deriveSession(clientEphemeral.secret, serverPublicEphemeral, salt, username, privateKey);

        const serverProof = authService.authenticate(username, clientEphemeral.public, clientSession.proof);
        expect(serverProof).toBeDefined();

        // Step 4: Verify session
        const verificationResult = authService.verifySession(username, clientEphemeral, clientSession, serverProof);
        expect(verificationResult).toBe(true);
    });
});

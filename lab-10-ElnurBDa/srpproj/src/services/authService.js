const srpClient = require('secure-remote-password/client');
const srpServer = require('secure-remote-password/server');

class AuthService {
    constructor() {
        this.users = new Map();
    }

    signUp(username, password) {
        const salt = srpClient.generateSalt();
        const privateKey = srpClient.derivePrivateKey(salt, username, password);
        const verifier = srpClient.deriveVerifier(privateKey);

        // Log the verifier and salt
        console.log(`SignUp -> Username: ${username}`);
        console.log(`SignUp -> Salt: ${salt}`);
        console.log(`SignUp -> Verifier: ${verifier}`);

        // Store salt and verifier
        this.users.set(username, { salt, verifier });
        return { username, salt, verifier };
    }

    initiateLogin(username) {
        const user = this.users.get(username);
        if (!user) {
            // Return a bogus salt and ephemeral values if the user does not exist
            const bogusSalt = srpClient.generateSalt();
            const bogusVerifier = srpClient.deriveVerifier(srpClient.derivePrivateKey(bogusSalt, 'bogus', 'bogus'));
            const serverEphemeral = srpServer.generateEphemeral(bogusVerifier);
            return { salt: bogusSalt, publicEphemeral: serverEphemeral.public };
        }

        const { salt, verifier } = user;
        const serverEphemeral = srpServer.generateEphemeral(verifier);
        user.serverEphemeral = serverEphemeral;
        return { salt, publicEphemeral: serverEphemeral.public };
    }

    authenticate(username, clientPublicEphemeral, clientProof) {
        const user = this.users.get(username);
        if (!user) {
            throw new Error('User not found');
        }

        const { salt, verifier, serverEphemeral } = user;
        const serverSession = srpServer.deriveSession(serverEphemeral.secret, clientPublicEphemeral, salt, username, verifier, clientProof);

        // Store the server session proof for later verification
        user.serverSession = serverSession;

        // Return server session proof to client
        return serverSession.proof;
    }

    verifySession(username, clientEphemeral, clientSession, serverProof) {
        const user = this.users.get(username);
        if (!user) {
            throw new Error('User not found');
        }

        const { serverSession } = user;

        // First, verify the client's session key against the stored server session key
        if (clientSession.key !== serverSession.key) {
            throw new Error('Session keys do not match!');
        }

        // Then verify the server's proof using the client session's public ephemeral and key
        srpClient.verifySession(clientEphemeral.public, clientSession, serverProof);

        return true;
    }
}

module.exports = AuthService;

import { describe, it, expect, beforeAll, afterAll } from 'bun:test';
import { collection, addDoc, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { Timestamp } from 'firebase/firestore';
import { db } from '../firebase.config';

// Define the User data model
class User {
    name: string;
    surname: string;
    email: string;
    birthdate: Timestamp;

    constructor(name: string, surname: string, email: string, birthdate: Timestamp) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.birthdate = birthdate;
    }
}

describe('Firestore User Integration Tests', () => {
    let docRefId: string;

    beforeAll(async () => {
        const user = new User(
            'John',
            'Doe',
            'john.doe@example.com',
            Timestamp.fromDate(new Date('1990-01-01'))
        );

        const docRef = await addDoc(collection(db, 'users'), {
            name: user.name,
            surname: user.surname,
            email: user.email,
            birthdate: user.birthdate,
        });
        docRefId = docRef.id;
    });

    afterAll(async () => {
        await deleteDoc(doc(db, 'users', docRefId));
    });

    it('should store user data correctly', async () => {
        const querySnapshot = await getDocs(collection(db, 'users'));
        let fetchedUser = null;
        querySnapshot.forEach((doc) => {
            if (doc.id === docRefId) {
                fetchedUser = doc.data();
            }
        });

        expect(fetchedUser).not.toBeNull();
        if (fetchedUser) {
            expect(fetchedUser.name).toBe('John');
            expect(fetchedUser.surname).toBe('Doe');
            expect(fetchedUser.email).toBe('john.doe@example.com');
            expect(fetchedUser.birthdate.toDate().getTime()).toBe(
                Timestamp.fromDate(new Date('1990-01-01')).toDate().getTime()
            );
        }
    });

    it('should delete user data correctly', async () => {
        await deleteDoc(doc(db, 'users', docRefId));
        const querySnapshot = await getDocs(collection(db, 'users'));
        let fetchedUser = null;
        querySnapshot.forEach((doc) => {
            if (doc.id === docRefId) {
                fetchedUser = doc.data();
            }
        });

        expect(fetchedUser).toBeNull();
    });

    it('should insert and fetch user data correctly', async () => {
        const user = new User(
            'Jane',
            'Smith',
            'jane.smith@example.com',
            Timestamp.fromDate(new Date('1985-05-15'))
        );

        const docRef = await addDoc(collection(db, 'users'), {
            name: user.name,
            surname: user.surname,
            email: user.email,
            birthdate: user.birthdate,
        });

        const insertedDocRefId = docRef.id;

        const querySnapshot = await getDocs(collection(db, 'users'));
        let fetchedUser = null;
        querySnapshot.forEach((doc) => {
            if (doc.id === insertedDocRefId) {
                fetchedUser = doc.data();
            }
        });

        expect(fetchedUser).not.toBeNull();
        if (fetchedUser) {
            expect(fetchedUser.name).toBe('Jane');
            expect(fetchedUser.surname).toBe('Smith');
            expect(fetchedUser.email).toBe('jane.smith@example.com');
            expect(fetchedUser.birthdate.toDate().getTime()).toBe(
                Timestamp.fromDate(new Date('1985-05-15')).toDate().getTime()
            );
        }

        await deleteDoc(doc(db, 'users', insertedDocRefId));
    });
});

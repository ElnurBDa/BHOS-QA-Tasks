import axios from 'axios';

describe('API JSON Response Test', () => {
    it('should return a list with unique "id" and "name" and valid fields', async () => {
        const response = await axios.get('https://60a21d3f745cd70017576092.mockapi.io/api/v1/repos');
        const data = response.data;

        expect(Array.isArray(data)).toBe(true);

        const ids = new Set();
        const names = new Set();

        data.forEach((item: { id: string; createdAt: string; name: string }) => {
            expect(item).toHaveProperty('id');
            expect(item).toHaveProperty('createdAt');
            expect(item).toHaveProperty('name');

            expect(ids.has(item.id)).toBe(false);
            expect(names.has(item.name)).toBe(false);

            ids.add(item.id);
            names.add(item.name);
        });
    }, 15000);
});

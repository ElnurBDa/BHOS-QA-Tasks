import { describe, it, expect } from "bun:test";
import { z } from "zod";

const BASE_URL = "https://60a21d3f745cd70017576092.mockapi.io/api/v1";

// Define Zod schemas
const repoSchema = z.object({
    id: z.string(),
    createdAt: z.string().datetime(),
    name: z.string(),
});

const branchSchema = z.object({
    id: z.string(),
    repoId: z.string(),
    createdAt: z.string().datetime(),
    name: z.string(),
    updatedAt: z.string().datetime(),
});

const commitSchema = z.object({
    id: z.string(),
    branchId: z.string(),
    createdAt: z.string().datetime(),
    message: z.string(),
    entry: z.string(),
    sha: z.string(),
});

describe("Integration Tests for Repos API", () => {
    it("should fetch all repos", async () => {
        const response = await fetch(`${BASE_URL}/repos`);
        const data = await response.json();
        
        expect(response.status).toBe(200);
        expect(Array.isArray(data)).toBe(true);
        expect(data.length).toBeGreaterThan(0);

        // Validate schema
        data.forEach((repo: unknown) => {
            repoSchema.parse(repo);
        });
    });

    it("should fetch branches for a specific repo", async () => {
        const repoId = 1;
        const response = await fetch(`${BASE_URL}/repos/${repoId}/branches`);
        const data = await response.json();
        
        expect(response.status).toBe(200);
        expect(Array.isArray(data)).toBe(true);
        expect(data.length).toBeGreaterThan(0);

        // Validate schema
        data.forEach((branch: unknown) => {
            branchSchema.parse(branch);
        });
    });

    it("should fetch commits for a specific branch", async () => {
        const repoId = 1;
        const branchId = 1;
        const response = await fetch(`${BASE_URL}/repos/${repoId}/branches/${branchId}/commits`);
        const data = await response.json();
        
        expect(response.status).toBe(200);
        expect(Array.isArray(data)).toBe(true);
        expect(data.length).toBeGreaterThan(0);

        // Validate schema
        data.forEach((commit: unknown) => {
            commitSchema.parse(commit);
        });
    });
});
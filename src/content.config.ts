import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

const projects = defineCollection({
  loader: file("src/content/projects.json"),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    blurb: z.string(), // short card summary
    description: z.string(), // long detail-page intro
    features: z.array(z.string()).default([]),
    role: z.string().optional(),
    year: z.string().optional(),
    stack: z.array(z.string()),
    tags: z.array(z.string()).default([]),
    image: z.string(),
    liveUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

const certificates = defineCollection({
  loader: file("src/content/certificates.json"),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    issuer: z.string(),
    date: z.string(), // "YYYY-MM" — display-only, kept as string
    image: z.string(),
    url: z.string().url().optional(),
  }),
});

const experience = defineCollection({
  loader: file("src/content/experience.json"),
  schema: z.object({
    id: z.string(),
    role: z.string(),
    org: z.string(),
    start: z.string(), // "YYYY-MM"
    end: z.string().optional(), // omit = "Present"
    summary: z.string(),
  }),
});

const skills = defineCollection({
  loader: file("src/content/skills.json"),
  schema: z.object({
    id: z.string(),
    category: z.string(),
    items: z.array(z.string()),
  }),
});

export const collections = { projects, certificates, experience, skills };

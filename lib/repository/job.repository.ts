import { Job } from "@/components/jobs/jobs.type";
import fs from 'fs';
import path from 'path';

const jobsDataPath = path.join(process.cwd(), 'data', 'jobs.json');

export function getAllJobs(): Job[] {
    const fileContents = fs.readFileSync(jobsDataPath, 'utf8');
    const data = JSON.parse(fileContents);
    return data
}

export function getAllRoles(): string[] {
    const roles: Set<string> = new Set();
    
    getAllJobs().forEach((job: Job) => roles.add(job.role))

    return Array.from(roles)
}

export function getAllPosition(): string[] {
    const positions: Set<string> = new Set();
    
    getAllJobs().forEach((job: Job) => positions.add(job.position))

    return Array.from(positions)
}

export function getAllLanguages(): string[] {
    const languages: Set<string> = new Set();
    
    getAllJobs().forEach((job: Job) => {
        job.languages.forEach(l => languages.add(l))
    })

    return Array.from(languages)
}

export function getAllTools(): string[] {
    const tools: Set<string> = new Set();
    
    getAllJobs().forEach((job: Job) => {
        job.tools.forEach(t => tools.add(t))
    })

    return Array.from(tools)
}